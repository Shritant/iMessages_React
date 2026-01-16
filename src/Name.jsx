import './App.css'

function Name({text}) {

  return (
    <p class="name-container">
      {text}
    </p>
  )
}

function Contact({name}, {profile_Picture}, {latest_Message}) {
  {profile_Picture}
  {name}
  {latest_Message}
}

export default Name;