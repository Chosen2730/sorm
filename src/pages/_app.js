import "tailwindcss/tailwind.css";
import Layout from "../Layout/Layout";
import { AppProvider } from "../utils/context";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
