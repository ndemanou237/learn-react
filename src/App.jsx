
const title = "Bonjour a vous tous chez citoyen"
const test = {color:'red', backgroundColor:'aqua'}

function App() {

  const clicked = (e) =>{
    console.log(e)
    alert('vous avez cliquez sur le h1')
  }
  return  <div>
    <h1 onClick={clicked} id='title' className='title' style={test}>{title}</h1>
    <input type="text" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates enim dicta, molestias ullam tenetur corporis ipsum porro quisquam architecto provident quia quidem. Illo consequuntur animi reiciendis quod maiores magnam.</p>

  </div>
  
}

export default App
