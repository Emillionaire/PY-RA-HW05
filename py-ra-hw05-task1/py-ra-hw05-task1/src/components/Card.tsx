import { type PropsWithChildren } from 'react';

function Card (props: PropsWithChildren<{ title: string, content: string }>): JSX.Element {
    const { title, content, children } = props
    return (
      <div className="card" style={{
        width: '18rem'
      }}>
  
        <div className="card-body">
          {children}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }

export default Card;