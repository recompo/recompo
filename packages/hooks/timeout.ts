import { useCallback, useEffect, useRef } from "react"

const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  const reset = useCallback(() => {
    clear()
    set()
  }, [])

  useEffect(() => {
    const timeout = setTimeout(callbackRef.current, delay)
    timeoutRef.current = timeout
  }, [delay])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  return [reset, clear]
}

export default useTimeout
