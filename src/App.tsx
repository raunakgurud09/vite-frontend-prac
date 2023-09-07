import './App.css'
import Cards from './components/Cards'
import TypeWriter from './components/TypeWriter'
import Animation from './components/animation'

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
]



function App() {

  return (
    <div className='w-full overflow-x-hidden  mx-auto max-w-full h-screen'>


      {/* <TypeWriter /> */}
      <Animation />
      <Cards />
      <div className="h-screen"></div>
      {/* <Other /> */}
      {/* <CardContainer /> */}
      {/* <GridLines /> */}
    </div>
  )
}















export default App
