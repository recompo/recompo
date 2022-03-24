import { AppProps } from "next/app"
import Prism from "prism-react-renderer/prism"
;(typeof global !== "undefined" ? global : window).Prism = Prism

import "nextra-theme-docs/style.css"
import "../../dist/style.css"
import "prism-themes/themes/prism-one-dark.css"
function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Nextra
