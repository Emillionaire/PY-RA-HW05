type NewsPostProps = {
  content: string
}

function NewsPost ({ content }: NewsPostProps): JSX.Element {
  return (
    <div>{content}</div>
  )
}

export default NewsPost
