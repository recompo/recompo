import { AppProps } from "next/app"

import "nextra-theme-docs/style.css"
import "recompo/style.css"
import "prism-themes/themes/prism-one-dark.css"
function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Nextra
