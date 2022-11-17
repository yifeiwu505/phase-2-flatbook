import { useState, useEffect } from "react";

function addFren({people,setPeople}){
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState("");

  const handleChange = (event) => {
    // setName(event.target.name)
    const value = event.target.value;
    // setInputs(values => ({...values, [name]: value}))
  }

  const url = "http://localhost:3001/Cohort"
  const newFri = {
    name: name,
    image: img,
    description: des,
    ban: "false",
    follow: "false"
  };
    //post here
    function handleFriend(){
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
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Friend's name:
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter their description:
          <input
            type="text"
            name="why"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </label>

        <label>
          Drop their pics here:
          <input
            type="img"
            name="pics"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <button onClick={handleFriend}>Submit</button>
      </form>
    );
}

export default addFren;