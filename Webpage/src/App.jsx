import Home from "../src/Components/Home"
import About from "../src/Components/About"
import Skills from "../src/Components/Skills"
import "../src/Styles/reset.css"
import "../src/Styles/app.css"


function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App