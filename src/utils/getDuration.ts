const getDuration = ({ runtime }: { runtime: number | null | undefined }) => {
  if (runtime) {
    const hour = Math.round(runtime / 60)
    const minutes = runtime % 60
    return `${hour}h ${minutes}m`
  }

  return ''
}

export default getDuration
