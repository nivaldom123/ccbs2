import type { AppProps } from "next/app";
import Layout from "layout";
import "styles/globals.scss";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
