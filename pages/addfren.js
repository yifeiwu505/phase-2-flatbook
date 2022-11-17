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
    <div className="main-container">
      <h1 className="friend-title">Add as Friend</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            {/* Search for Friend's : */}
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <label>
            {/* Enter their description: */}
            <input
              type="text"
              name="why"
              value={des}
              placeholder="Description"
              onChange={(e) => setDes(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <label>
            {/* Drop their pics here: */}
            <input
              type="img"
              name="pics"
              value={img}
              placeholder="Image"
              onChange={(e) => setImg(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <div className="btn-container">
            <button
              className="bg-blue-500 hover:bg-white-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleFriend}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}

export default addFren;