import React, { useEffect } from "react"
import throttle from "../utils/throttle"

const useThrottle = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(throttle(effect, delay), deps)
}

export default useThrottle
