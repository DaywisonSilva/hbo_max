const getDuration = ({ runtime }: { runtime: number }) => {
  const hour = Math.round(runtime / 60)
  const minutes = runtime % 60
  return `${hour}h ${minutes}m`
}

export default getDuration
