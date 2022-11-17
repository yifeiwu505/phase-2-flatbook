import { useState, useEffect } from "react";

function addFren(){
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const url = "http://localhost:3001/Cohort"
  const newFri = {
    name: name,
    img: img,
    des: des
  }
    //post here
    useEffect(()=>{
        fetch(url, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newFri), 
})
.then(r=>r.json())
.then(data =>{
    const update =[...people,data]
    setPeople(update)
})
    },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }
    return(
        <form onSubmit={handleSubmit}>
            
      <label>Enter your Friend's name:
      <input 
        type="text" 
        name="username" 
        value={name.setName || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter their description:
        <input 
          type="text" 
          name="why" 
          value={des.setDes || ""} 
          onChange={handleChange}
        />
        </label>

        <label>Drop their pics here:
        <input 
          type="img" 
          name="pics" 
          value={img.setImg || ""} 
          onChange={handleChange}
        />
        </label>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    )
}

export default addFren;