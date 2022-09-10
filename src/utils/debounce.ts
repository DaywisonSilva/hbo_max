let timer = 0

const debounce = (fn: Function, timeout: number) => {
  clearTimeout(timer)
  timer = setTimeout(fn, timeout)
}

export default debounce
