import  {useState} from "react"
function App() {
  const [count,setCount] = useState(0)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const handleIncrement=()=>
  {
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }

  const handleDecrement=()=>
  {
    setCount((prevCount)=>prevCount-1)
    console.log(count)
  }

  const handleEmail=(event)=>
  {
    setEmail(event.target.value)

  }
  
  const handlePassword=(event)=>
  {
    setPassword(event.target.value)

  }
  

  const handleClick = () => {
    console.log("the button is clicked")
    alert("Hello ")
  }

  const handleChange = (event) => {
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  setFormData({
    ...formData,
    [event.target.name]:event.target.value
  })

  }
  


  const handleSubmit = () => {
    alert(` email:${formData.email}\n password:${formData.password}\n"login succesful"`)
  }




  return (
    <div>

      <form onSubmit={handleSubmit}>
        <p> enter you email</p>
        <input type="text" name="email" placeholder="enter your email" onChange={handleChange} />
        <p>enter the password</p>
        <input type="pasword" name="password" placeholder="enter password" onChange={handleChange} />
        <div>
          <button type="submit">login </button>

        </div>
        
      </form>

      <p>{count}</p>      

        <button onClick={handleIncrement}>increment</button>
    
      <button onClick={handleDecrement}>decrement</button>


    </div>
  )
}

export default App
