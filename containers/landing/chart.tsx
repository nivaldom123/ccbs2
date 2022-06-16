import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import moment from "moment";
import useCurrency from "store/hooks/useCurrency";
import { ActionType } from "typings/store";
import { APIResponseType, ApiStateType } from "typings/api";
import dataDays from "constants/dataDays";
import symbolFind from "constants/symbolfind";
import useFetch from "constants/hooks/useFetch";
import unixTimeConverter from "constants/unixTimeConverter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartContainer() {
  const { primaryCode, secondryCode } = useCurrency();

  const {
    labels,
    chartState,
    lowerValues,
    higherValues,
    subtractDays,
    topButtonStyle,
    updateDaysHandler,
    // newApiHiger,
    // newApiLower,
  } = useChartHook();

  const pointRadiusBuilder = (days: number) => {
    let n = 3;
    if (days >= 365) {
      return (n = 0);
    } else if (days >= 180) {
      return (n = 1);
    } else if (days >= 60) {
      return (n = 2);
    } else {
      return n;
    }
  };

  const { error, loading } = chartState;
  const symbol = symbolFind(primaryCode);
  // console.log(symbol);

  return (
    <div style={topButtonStyle.content}>
      <div style={topButtonStyle.tab}>
        {dataDays.map((data, i) => (
          <button
            key={i}
            style={Object.assign(
              {
                background:
                  data.number === subtractDays
                    ? "var(--accent-color)"
                    : "var(--secondry-background)",
                color:
                  data.number === subtractDays
                    ? "var(--white-1)"
                    : "var(--primary-color)",
              },
              topButtonStyle.button
            )}
            onClick={() => updateDaysHandler(data.number)}
          >
            {data.label}
          </button>
        ))}
      </div>
      <Line
        options={{
          responsive: true,
          // aspectRatio: 10,
          // devicePixelRatio: 8,
          plugins: {
            legend: {
              position: "top" as const,
              labels: {
                usePointStyle: false,
                boxWidth: 20,
                font: {
                  size: 10,
                },
                // color: "red",
              },
            },
            title: {
              display: false,
              text: error
                ? "Erro ao carregar dados"
                : loading
                ? "Carregando..."
                : "Este gráfico baseado na moeda base",
            },
          },
          scales: {
            x: {
              grid: {
                display: true,
                drawBorder: true,
                // drawOnChartArea: CHART_AREA,
                // drawTicks: TICKS,
              },
            },

            // y:{
            //   display:false
            // }
          },
          // layout: {
          //   padding: 10,
          // },
        }}
        // Data
        data={{
          labels: labels.reverse(),
          datasets: [
            {
              label: `High`,
              // label: `Preço de ${symbol} ${primaryCode}`,
              data: higherValues.reverse(),
              // data: higherValues.map((x) => x.toFixed(6)),
              tension: 0.1,
              borderWidth: 1,
              pointHitRadius: 10,
              pointStyle: "circle",
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              pointRadius: pointRadiusBuilder(subtractDays),
            },
            {
              label: `Low`,
              // label: `Preço de ${symbol} ${secondryCode}`,
              data: lowerValues.reverse(),
              tension: 0.1,
              borderWidth: 1,
              pointHitRadius: 10,
              pointStyle: "circle",
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              pointRadius: pointRadiusBuilder(subtractDays),
            },
          ],
        }}
      />
    </div>
  );
}
export default ChartContainer;

const useChartHook = () => {
  const { primaryCode, secondryCode } = useCurrency();
  const [subtractDays, updateDays] = React.useState<number>(15);
  /**************************
  Handler For Days
  ***************************/
  const updateDaysHandler = React.useCallback(
    (days: number) => updateDays(days),
    [subtractDays]
  );

  /**************************
  EndPoint
  ***************************/
  const endpoint = `https://economia.awesomeapi.com.br/json/daily/${primaryCode}-${secondryCode}/${subtractDays}`;

  /**************************
  State
  ***************************/
  const chartState = useFetch<APIResponseType[]>(endpoint);
  const { response } = chartState;
  /**************************
  Graph Plot Arrays
  ***************************/
  const higherValues = response.map((d: APIResponseType) => d.high);
  const lowerValues = response.map((d: APIResponseType) => d.low);
  /**************************
  Labels Array
  ***************************/
  const labels = response.map((d: APIResponseType) => {
    let t = d?.timestamp;
    const realDate = unixTimeConverter(t);
    return moment(realDate).format("DD MMM YYYY");
  });

  const topButtonStyle = {
    content: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: "1rem",
      width: "100%",
    } as React.CSSProperties,
    tab: {
      gap: "8px",
      display: "flex",
      flexWrap: "wrap",
      alignSelf: "center",
      paddingBottom: "1rem",
    } as React.CSSProperties,
    button: {
      flex: 1,
      minWidth: "80px",
      borderRadius: "8px",
    },
  };

  return {
    labels,
    topButtonStyle,
    chartState,
    subtractDays,
    higherValues,
    lowerValues,
    updateDaysHandler,
  };
};
