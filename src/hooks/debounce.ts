import { useCallback, useEffect } from "react"
import debounce from "utils/debounce"
import useTimeout from "./timeout"

const useDebounce = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(debounce(effect, delay), deps)
}

export default useDebounce
