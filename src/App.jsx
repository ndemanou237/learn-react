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
    const [person ,  setperson] = useState({
      firstname: 'john',
      lastname: 'donald',
      age: 18
    })
    const [count, setCount] = useState(0)

    const incrementAge = () => {
        // person.age++
        // setperson(person)
        setperson({...person, age : person.age + 1})
    } 

    const incrementCount = () =>{
      setCount(count + 1)
    }
  
  return  <>

    <p>age de {person.firstname} : {person.age}</p>
    <button onClick={incrementAge}>gagner une année</button>
    <button onClick={incrementCount}>incrementer {count}</button>
 

  </>
  
}



export default App
