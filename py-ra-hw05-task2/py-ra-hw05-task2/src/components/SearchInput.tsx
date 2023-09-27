import '../css/SearchInput.css'

type SearchInputProps = {
  name: string
  url: string
}

function SearchInput ({ name, url }: SearchInputProps): JSX.Element {
  return (
    <div className="search-input">
        <img src={url} alt={name} style={{
          width: '50px'
        }}/>
        <input type="search" name="search"/>
        <button type="submit">Найти</button>
    </div>
  )
}

export default SearchInput
