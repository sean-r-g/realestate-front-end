import {useState, useEffect} from 'react'
import axios from 'axios'

///EXAMPLE: props.house.name///

const Houses = (props) => {

  const [newName, setNewName] = useState()
  const [newAddress, setNewAddress] = useState ()
  const [price, setPrice] = useState ()
  const [size, setSize] = useState ()
  const [roomsNum, setRoomsNum] = useState ()
  const [bathNum, setBathNum] = useState ()
  const [newImage, setNewImage] = useState ()
  const [newAvailable, setNewAvailable] = useState (true)
  const [showEdit, setShowEdit] = useState (false)
  const [showNewForm, setShowNewForm] = useState(false)
  const [houses, setHouses] = useState([])

  const handleNewImage = (event) => {
    setNewImage(event.target.value)
  }

  const handleNewAddress = (event) => {
    setNewAddress(event.target.value)
  }

  const handleNewPrice = (event) => {
    setPrice(event.target.value)
  }

  const handleNewSize = (event) => {
    setSize(event.target.value)
  }

  const handleNewRoomsNum = (event) => {
    setRoomsNum(event.target.value)
  }

  const handleNewBathsNum = (event) => {
    setBathNum(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }


  const handleNewHouseSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'https://real-estate-back-end.herokuapp.com/houses', {
        name: newName,
        location: newAddress,
        price: price,
        size: size,
        rooms: roomsNum,
        bath: bathNum,
        image: newImage,
        available: newAvailable,
        showEdit: showEdit
      }
    ).then(() => {
      axios.get('https://real-estate-back-end.herokuapp.com/houses').then((response) => {
        setHouses(response.data)
      })
    })
  }

  const handleHouseDelete = (houseData) => {
    axios.delete(`https://real-estate-back-end.herokuapp.com/houses/${houseData._id}`).then(() =>{
      axios.get('https://real-estate-back-end.herokuapp.com/houses').then((response) => {
        setHouses(response.data)
      })
    })
  }


  const handleHouseUpdate = (event, houseData) => {
    event.preventDefault()
      axios
      .put(`https://real-estate-back-end.herokuapp.com/houses/${houseData._id}`,
      {
        name: newName,
        location: newAddress,
        price: price,
        size: size,
        rooms: roomsNum,
        bath: bathNum,
        image: newImage,

      }).then(() => {
          axios
            .get('https://real-estate-back-end.herokuapp.com/houses')
            .then((response) => {
              setHouses(response.data)
            })
      })
  }

  ////////////////////////////////////
  ///////////Toggles/////////////////
  const handleNewFormToggle =(event) => {
    showNewForm ? setShowNewForm(false) : setShowNewForm(true)
  }

  const handleEditFormToggle = (houseData, event) => {
    showEdit ? setShowEdit (false) : setShowEdit (true)
    axios.put(`https://real-estate-back-end.herokuapp.com/houses/${houseData._id}`, {
      showEdit: showEdit
    }).then(() => {
      axios.get('https://real-estate-back-end.herokuapp.com/houses').then((response)=>{
        setHouses(response.data)
      })
    })
    }
  
  const handleNewStatus = (houseData, event) =>{
    newAvailable ? setNewAvailable(false) : setNewAvailable(true)
    axios.put(`https://real-estate-back-end.herokuapp.com/houses/${houseData._id}`, {
      available: newAvailable
    }).then(()=>{
        axios.get('https://real-estate-back-end.herokuapp.com/houses').then((response)=>{
          setHouses(response.data)
        })
      })
    }

  useEffect(() => {
    axios.get('https://real-estate-back-end.herokuapp.com/houses').then((response) => {
      setHouses(response.data)
    })
  }, [])

  return (
    <div className="primary-div">
      <h1>House Listing</h1>
      <button onClick={handleNewFormToggle}>Add New Listing</button>
      {showNewForm ? <div id='new-form-div'>
      <section>
        <form id='new-form' onSubmit={handleNewHouseSubmit}> 
          <label>Address: <input onChange={handleNewName} type='text'/></label><br/>       
          <label>Location: <input onChange={handleNewAddress} type='text'/></label><br/>         
          <label>Price(USD): $<input onChange={handleNewPrice} type='number'/></label><br/>         
          <label>Size (sqft): <input onChange={handleNewSize} type='number'/></label><br/>         
          <label>Rooms: <input onChange={handleNewRoomsNum} type='number'/></label><br/>         
          <label>Bathrooms: <input onChange={handleNewBathsNum} type='number'/></label><br/>         
          <label>Image: <input onChange={handleNewImage} type='text'/></label><br/>          
          <input id='save-changes-btn' type="submit" value="Create New Listing"/><br/>
          <button id='cancel-btn' onClick={ (event) => {handleNewFormToggle(event)}}>Cancel</button>     
        </form>
      </section>
      </div> :null}
      <section className='house-container'>
        {houses.map((house) => {
          return (
              <div className='house-card' key={house._id}>
              <img src={house.image}/>
              <h3>{house.name}</h3>
              <h4>Location: {house.location}</h4>
              <h4>Price: ${house.price}</h4>
              <h4>Size: {house.size} sq ft</h4>
              <h4>{house.rooms} Rooms, {house.bath} bathrooms</h4>
              {house.available ? <h4>Status: Available</h4> : <h4>Status: Unavailable</h4>}
              <button id='edit-btn' onClick={(event) =>{
                handleEditFormToggle(house)
              }}>Edit Listing</button>
              
              {house.showEdit ? <div className='edit-div'><form onSubmit={(event) => {
                handleHouseUpdate(event, house)
              }}>
                <label>Address: <input defaultValue={house.name} onChange={handleNewName} text="text"/></label><br/>
                <label>Location: <input defaultValue={house.location} onChange={handleNewAddress} text="text"/></label><br/>
                <label>Price (USD): $<input defaultValue={house.price} onChange={handleNewPrice} text="text"/></label><br/>
                <label>Size (sqft): <input defaultValue={house.size} onChange={handleNewSize} text="text"/></label><br/>
                <label>Rooms: <input defaultValue={house.rooms} onChange={handleNewRoomsNum} text="number"/></label><br/>
                <label>Bathrooms: <input defaultValue={house.bath} onChange={handleNewBathsNum} text="text"/></label><br/>
                <label>Image: <input defaultValue={house.image} onChange={handleNewImage} type='text'/></label><br/>
                { house.available ? <button id='status-btn' onClick={(event) => {handleNewStatus(house)}}>Set Status: Unavailable</button> : <button id='status-btn' onClick={(event) => {handleNewStatus(house)}}>Set Status: Available</button> }
                <input id='save-changes-btn' type='submit' value="Save Changes"/><br/>
                <button id='cancel-btn' onClick={ (event) => {handleEditFormToggle(house)}}>Cancel</button>
                <button className='delete' onClick={(event) =>{
                  handleHouseDelete(house)
                }}>Remove Listing</button>
              </form></div> :null} 
              </div> 
          )
        })}
      </section>
    </div>
  )
}


export default Houses