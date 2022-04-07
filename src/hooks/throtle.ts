import React, { useEffect, useRef, useState, useCallback } from "react"
import throttle from "utils/throttle"
import useTimeout from "./timeout"

const useThrottle = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(throttle(effect, delay), deps)
}

export default useThrottle
