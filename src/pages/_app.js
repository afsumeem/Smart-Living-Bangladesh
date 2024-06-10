import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      {getLayout(
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      )}
    </>
  );
}
