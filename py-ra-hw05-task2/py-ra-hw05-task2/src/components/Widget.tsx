import '../css/Widget.css'

type WidgetProps = {
  title: string
  children: React.ReactNode
}

function Widget ({ title, children }: WidgetProps): JSX.Element {
  return (
        <div className="widget">
            <div>{title}</div>
            {children}
        </div>
  )
}

export default Widget
