const debounce = (cb: (...args: unknown[]) => unknown, delay = 250) => {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: unknown[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
export default debounce
