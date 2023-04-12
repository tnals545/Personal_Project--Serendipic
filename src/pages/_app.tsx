import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { GlobalStyle } from "@/styles/global.style";
import { wrapper } from "@/store";
import "../../public/static/fonts/style.css";

function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...props.pageprops} />
    </Provider>
  );
}

export default App;
