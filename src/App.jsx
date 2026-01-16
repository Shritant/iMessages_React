import Name from './Name.jsx'
import './App.css'

function App() {
  const names = ["Shritan", "Ruhan", "Sid", "Nico", "Sina", "Bobby", "Joey"]
  const namesList = names.map((n) => <Name text={n}></Name>)


  return (
    <div id="body">
      <h1>Messages</h1>
      <input type="search" id="search-input" placeholder="Search"></input>
      <ul id="contacts">
        {namesList}
      </ul>
    </div>
  )
}

export default App
