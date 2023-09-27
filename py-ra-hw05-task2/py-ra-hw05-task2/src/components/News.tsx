import '../css/News.css'
import NewsPost from './NewsPost'

type NewsProps = {
  data: string[]
}

function News ({ data }: NewsProps): JSX.Element {
  return (
    <div className="news">
        {data.map((item) => <NewsPost content={item}/>)}
    </div>
  )
}

export default News
