import Card from './components/Card';

function App (): JSX.Element {
  return (
    <>
      <Card title="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Netology_logo.svg" className="card-img-top" alt="Netology" />
      </Card>
      <Card title="Special title treatment" content="With supporting text below as a natural lead-in to additional content." />
    </>
  )
}

export default App
