import React from "react";
import Converter from "./converter";
import dynamic from "next/dynamic";
import Title from "containers/elements/title";
import useCurrency from "store/hooks/useCurrency";
import LoadingComponent from "containers/elements/loading";

const ChartContainer = dynamic(async () => await import("./chart"), {
  loading: () => <LoadingComponent />,
});
const LiveExchangeRate = dynamic(async () => await import("./live"), {
  loading: () => <LoadingComponent />,
});

const LandingPage = () => {
  const { primaryCode, secondryCode } = useCurrency();
  return (
    <React.Fragment>
      <Title
        <img src="./images/logo.jpg" alt="logo" width="200">
        title={"Conversor de moeda"}
        description={"Verifique as taxas de câmbio em tempo real"}
      />
      <Converter />
      <Title
        id="live"
        title={"Taxas de câmbio ao vivo"}
        description={`Tabela de Valores em ${primaryCode} / ${secondryCode} Convertidos.`}
      />

      <LiveExchangeRate />
      <Title
        id="charts"
        title={"Gráfico de taxas de câmbio ao vivo"}
        description={"Gráfico de taxas de câmbio de moeda estrangeira ao vivo"}
      />
      <ChartContainer />
    </React.Fragment>
  );
};
export default LandingPage;
