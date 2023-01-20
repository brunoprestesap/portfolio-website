import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from "./components/Sidenav"
import Work from "./components/Work"

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Courses />
      <Contact />
    </div>
  )
}

export default App
