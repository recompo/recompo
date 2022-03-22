import { AppProps } from "next/app"
import "nextra-theme-docs/style.css"

function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Nextra
