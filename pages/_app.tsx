import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {

  return <>
      <Navbar />
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
  </>
}
