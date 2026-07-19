import { useState } from "react"
import {Input} from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/checkbox.jsx";
import { ProduitCategoryRow } from "./components/forms/produits/produitCategoryRow.jsx";
import { ProductRow } from "./components/forms/produits/ProduitRow.jsx";
<link rel="stylesheet" href="output.css" />
// import * from "output.css"

// export function Checkbox({checked, onChange, label}){
//     return <div>
//         <input 
//         type="text"
//         className="form-check-input"
//         checked={checked}
//         onChange={(e) => onChange(e.target.checked)} 
//         />
//         <label className="form-check-label">{label}</label>
//     </div>
// }

// const { useState } = require("react");

// const title = "Bonjour a vous tous chez citoyen"
// const test = {color:'red', backgroundColor:'aqua'}
// const showtitle = true
// const todos = [
//   'apprendre react',
//   'lire',
//   'visionnez'
// ]

// function App() {
//   // use the usestate

//     // const [person ,  setperson] = useState({
//     //   firstname: 'john',
//     //   lastname: 'donald',
//     //   age: 18
//     // })
//     // const [count, setCount] = useState(0)

//     // const incrementAge = () => {
//     //     // person.age++
//     //     // setperson(person)
//     //     setperson({...person, age : person.age + 1})
//     // } 

//     // const incrementCount = () =>{
//     //   setCount(count + 1)
    
  
//   // return  <>

//   //   <p>age de {person.firstname} : {person.age}</p>
//   //   <button onClick={incrementAge}>gagner une année</button>
//   //   <button onClick={incrementCount}>incrementer {count}</button>
 

//   // </>

//   // const [firstname, setFirstname] = useState('john dae')

//   // const handleChange = (e) =>{
//   //   setFirstname(e.target.value)
//   // }

//   // const reset = () => {
//   //   setFirstname('')
//   // }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(new FormData(e.target))
//   }

//   const [checked, setChecked] = useState(true)
//   const toogleCheck = () =>{
//     setChecked(!checked)
//   }

//   return <form onSubmit={handleSubmit}>
//     <input type="text" name="firstname" defaultValue="maman"/>
//     <input type="checkbox" checked={checked} onChange={toogleCheck} />
//     <button disabled={!checked}>Envoyer</button>
    

    

//   </form>
  
// }



// export default App

// utilisation des usestate dans les Booleen 
// function App() {
//   const [isTermAccepted, setIsTermAccepted] = useState(false)

//   return <form>
//     <CGUChecbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
//     <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
//   </form>
// }

// function CGUChecbox ({checked, onCheck}){
//   return <div>
//     <label>
//       <input type="checkbox" onChange={(e) => onCheck(e.target.checked)} checked={checked} />
//       Accepter les condition
//     </label>
//   </div>
// }

// export default App


const PRODUITS = [
  {category: "Fruits", price:"$1", stocked: true, name: "Apple"},
  {category: "Fruits", price:"$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price:"$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price:"$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price:"$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price:"$1", stocked: true, name: "Peas"}
]

function App(){
  return <div className="m-3">
    <SearchBar />
    <ProductTable products={PRODUITS} />
  </div>

}

function SearchBar(){
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Rechercher..." ></Input>
      <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher que les produits en stock" />
    </div>
  </div>
}

function ProductTable ({products}){

  const rows = []
  let lasCategory = null
  for (let product of products){
    if (product.category !== lasCategory ){
      rows.push(<ProduitCategoryRow key={product.category} name={product.category} />)
    }
    lasCategory = product.category
    rows.push(<ProductRow key={product.name} product={product} />)
  }

  return <table className="w-1/2">
    <thead>
      <tr className="flex gap-5 justify-between ">
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}

    </tbody>
  </table>
}

export default App 
