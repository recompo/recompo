import { useEffect } from "react"
import debounce from "@recompo-utils/debounce"

const useDebounce = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(debounce(effect, delay), deps)
}

export default useDebounce
