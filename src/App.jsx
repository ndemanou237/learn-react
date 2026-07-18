import { useState } from "react"

const title = "Bonjour a vous tous chez citoyen"
const test = {color:'red', backgroundColor:'aqua'}
const showtitle = true
const todos = [
  'apprendre react',
  'lire',
  'visionnez'
]

function App() {
  // use the usestate

    // const [person ,  setperson] = useState({
    //   firstname: 'john',
    //   lastname: 'donald',
    //   age: 18
    // })
    // const [count, setCount] = useState(0)

    // const incrementAge = () => {
    //     // person.age++
    //     // setperson(person)
    //     setperson({...person, age : person.age + 1})
    // } 

    // const incrementCount = () =>{
    //   setCount(count + 1)
    
  
  // return  <>

  //   <p>age de {person.firstname} : {person.age}</p>
  //   <button onClick={incrementAge}>gagner une année</button>
  //   <button onClick={incrementCount}>incrementer {count}</button>
 

  // </>

  // const [firstname, setFirstname] = useState('john dae')

  // const handleChange = (e) =>{
  //   setFirstname(e.target.value)
  // }

  // const reset = () => {
  //   setFirstname('')
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const [checked, setChecked] = useState(true)
  const toogleCheck = () =>{
    setChecked(!checked)
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" name="firstname" defaultValue="maman"/>
    <input type="checkbox" checked={checked} onChange={toogleCheck} />
    <button disabled={!checked}>Envoyer</button>
    

    

  </form>
  
}



export default App
