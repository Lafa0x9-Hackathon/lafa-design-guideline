import Accordion from "./page/accordion/Accordion"
import Typography from "./page/typography/Typography"
import './app.scss'
import Card from "./page/card/Card"

function App() {
  return (
    <div className="app flex flex-col">
      <Card />
      <Accordion />
      <Typography />
    </div>
  )
}

export default App
