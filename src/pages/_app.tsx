import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { GlobalStyle } from "@/styles/global.style";
import { wrapper } from "@/store";
import "../../public/static/fonts/style.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Serendipic</title>
      </Head>
      <GlobalStyle />
      <Component {...props.pageprops} />
    </Provider>
  );
}

export default App;
