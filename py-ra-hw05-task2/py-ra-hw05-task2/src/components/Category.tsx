type CategoryProps = {
  name: string
  url: string
}

function Category ({ name, url }: CategoryProps): JSX.Element {
  return (
        <a className="category" href={url}>{name}</a>
  )
}

export default Category
