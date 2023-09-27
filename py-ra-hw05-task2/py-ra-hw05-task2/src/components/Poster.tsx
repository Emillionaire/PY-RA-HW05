type PosterProps = {
  name: string
  url: string
}

function Poster ({ url, name }: PosterProps): JSX.Element {
  return (
    <img src={url} alt={name} style={{
      width: '500px'
    }}/>
  )
}

export default Poster
