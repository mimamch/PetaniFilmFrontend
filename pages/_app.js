// import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import cookies from "js-cookie";
import { useEffect } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const flash = cookies.get("flash");
  useEffect(() => {
    if (flash) {
      const flashJson = JSON.parse(flash);
      toast[flashJson.type](flashJson.text);
      cookies.remove("flash");
    }
  }, [flash]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-right" />
    </>
  );
}
