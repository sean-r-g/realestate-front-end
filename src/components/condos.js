import {useState, useEffect} from 'react'
import axios from 'axios'

///EXAMPLE: props.condo.name///

const Condos = (props) => {

  //////////HOOKS///////////////////////////////////////////////////////
  const [condos, setCondos] = useState([])
  const [newName, setNewName] = useState()
  const [newlocation, setNewLocation] = useState()
  const [newPrice, setNewPrice] = useState()
  const [newSize, setNewSize] = useState()
  const [newRooms, setNewRooms] = useState()
  const [newBath, setNewBath] = useState()
  const [newImage, setNewImage] = useState()
  const [newAvailable, setNewAvailable] = useState()
  const [newShowEdit, setNewShowEdit] = useState(false)
  const [showNewForm, setShowNewForm] = useState(false)
  
  ////////HANDLE FUNCTIONS//////////////////////////////////////////
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewLocation = (event) => {
    setNewLocation(event.target.value)
  }
  const handleNewPrice = (event) => {
    setNewPrice(event.target.value)
  }
  const handleNewSize = (event) => {
    setNewSize(event.target.value)
  }
  const handleNewRooms = (event) => {
    setNewRooms(event.target.value)
  }
  const handleNewBath = (event) => {
    setNewBath(event.target.value)
  }
  const handleNewImage = (event) => {
    setNewImage(event.target.value)
  }
  const handleNewAvailable = (event) => {
    setNewAvailable(event.target.value)
  }
/////////////////////////////////////////////////////////
/////////////CREATE, UPDATE, DELETE////////////////////////////
const handleNewCondoSubmit = (event) =>{
  event.preventDefault()
  axios.post('http://localhost:3000/condos', {
    name: newName,
    location: newlocation,
    price: newPrice,
    size: newSize,
    rooms: newRooms,
    bath: newBath,
    image: newImage,
    available: newAvailable,
    showEdit: newShowEdit
  }).then(()=>{
    axios.get('http://localhost:3000/condos').then((response)=>{
      setCondos(response.data)
    })
  })
}

const handleCondoUpdateSubmit = (event, condoData) =>{
  event.preventDefault()
  axios.put(`http://localhost:3000/condos/${condoData._id}`, {
    name: newName,
    location: newlocation,
    price: newPrice,
    size: newSize,
    rooms: newRooms,
    bath: newBath,
  }).then(()=>{
    axios.get('http://localhost:3000/condos').then((response)=>{
      setCondos(response.data)
    })
  })
}

const handleCondoDelete = (condoData) =>{
  axios.delete(`http://localhost:3000/condos/${condoData._id}`).then(()=>{
    axios.get('http://localhost:3000/condos').then((response)=>{
      setCondos(response.data)
    })
  })
}
///////////////////////////////////////////
//////////////TOGGLES//////////////////////
const handleNewFormToggle = (event) =>{
  showNewForm ? setShowNewForm(false) : setShowNewForm(true)
}
const handleEditFormToggle = (condoData, event) =>{
  newShowEdit ? setNewShowEdit(false) : setNewShowEdit(true)
  axios.put(`http://localhost:3000/condos/${condoData._id}`, {
    showEdit: newShowEdit
  }).then(()=>{
    axios.get('http://localhost:3000/condos').then((response)=>{
      setCondos(response.data)
    })
  })
}

////////////USE EFFECT/////////////////////
useEffect(()=>{
  axios.get('http://localhost:3000/condos').then((response)=>{
    setCondos(response.data)
  })
})
////////////////////////////////////////////////////////////
////////////////JSX////////////////////////////////////
  return (
    <div className='primary-div'>
      <h1>Condo Listings</h1>
      <button onClick={handleNewFormToggle}>Add New Listing</button>
      {showNewForm ? <div id='new-form-div'>
        <form id='new-form' onSubmit={handleNewCondoSubmit}>
          <label>Address: <input type='text' onChange={handleNewName}/></label><br/>
          <label>Location: <input type='text' onChange={handleNewLocation}/></label><br/>
          <label>Price (USD): $<input type='number' onChange={handleNewPrice}/></label><br/>
          <label>Size (sqft): <input type='text' onChange={handleNewSize}/></label><br/>
          <label>Rooms: <input type='number' onChange={handleNewRooms}/></label><br/>
          <label>Bathrooms: <input type='number' onChange={handleNewBath}/></label><br/>
          <label>Image: <input type='url' onChange={handleNewImage}/></label><br/>
          <input type='submit' value="Create New Listing"/>
        </form>
      </div> : null}
      <div className='condo-container'>
        {condos.map((condo)=>{
          return (
            <div className='condo-card' key={condo._id}>
              <img src={condo.image}/>
              <h3>{condo.name}</h3>
              <h4>Location: {condo.location}</h4>
              <h4>Price: ${condo.price}</h4>
              <h4>Size: {condo.size} sq. ft.</h4>
              <h4>{condo.rooms} Rooms, {condo.bath} Bathrooms</h4>
              {condo.available ? <h4>Status: Available</h4> : <h4>Status: Unavailable</h4>}
              <button id='edit-btn' onClick={ (event) => {handleEditFormToggle(condo)}}>Edit Listing</button>
              {condo.showEdit ? <div className='edit-div'>
                <form onSubmit={ (event) => {handleCondoUpdateSubmit(event, condo)}}>
                  <label>Address: <input type='text' placeholder={condo.name} onChange={handleNewName}/></label><br/>
                  <label>Location: <input type='text' placeholder={condo.location} onChange={handleNewLocation}/></label><br/>
                  <label>Price (USD): $<input type='number' placeholder={condo.price} onChange={handleNewPrice}/></label><br/>
                  <label>Size (sqft) <input type='text' placeholder={condo.size} onChange={handleNewSize}/></label><br/>
                  <label>Rooms: <input type='number' placeholder={condo.rooms} onChange={handleNewRooms}/></label><br/>
                  <label>Bathrooms: <input type='number' placeholder={condo.bath} onChange={handleNewBath}/></label><br/>
                  <input id='save-changes-btn'type='submit' value="Save Changes"/><br/>
                  <button id='cancel-btn' onClick={ (event) => {handleEditFormToggle(condo)}}>Cancel</button>
                  <button className='delete' onClick={(event) => {handleCondoDelete(condo)}}>Remove Listing</button>
                </form>
              </div> : null}
            </div>
          )
        })}
      </div>
    </div>
  )

}


export default Condos