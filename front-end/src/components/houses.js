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
      'http://localhost:3000/houses', {
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
      axios.get('http://localhost:3000/houses').then((response) => {
        setHouses(response.data)
      })
    })
  }

  const handleHousesUpdate = (event, houseData) => {
    event.preventDefault()
      axios
      .put(`http://localhost:3000/houses/${houseData._id}`,
      {
        name: newName,
        location: newAddress,
        price: price,
        size: size,
        rooms: roomsNum,
        bath: bathNum,
        image: newImage
      }).then(() => {
          axios
            .get('http://localhost:3000/houses')
            .then((response) => {
              setHouses(response.data)
            })
      })
  }

  


  useEffect(() => {
    axios.get('http://localhost:3000/albums').then((response) => {
      setHouses(response.data)
    })
  }, [])

  return (
    <main>
      <h1>List a House</h1>
      <section>
        <form onSubmit={handleNewHouseSubmit}>
          <input placeholder='Image Link' onChange={handleNewImage} type='text'/><br/>         
          <input placeholder='Address' onChange={handleNewAddress} type='text'/><br/>         
          <input placeholder='Price' onChange={handleNewPrice} type='number'/><br/>         
          <input placeholder='Size' onChange={handleNewSize} type='number'/><br/>         
          <input placeholder='Rooms number' onChange={handleNewRoomsNum} type='number'/><br/>         
          <input placeholder='Baths number' onChange={handleNewBathsNum} type='number'/><br/>         
          <input placeholder='House name' onChange={handleNewName} type='text'/><br/>         
          <input type="submit" value="Create New Listing"/><br/>     
        </form>
      </section>
      <section className='container'>
        {houses.map((house) => {
          return (
            <div className='card' key={houses._id}>
              <img src={house.image}/>
              <h2>{house.name}</h2>
              <h3>Location: {house.location}</h3>
              <h3>Price: {house.price}</h3>
              <h3>Size: {house.size}</h3>
              <h3>{house.rooms} Rooms, {house.bath} bathrooms</h3>
              {house.available ? <h4>Status: Available</h4> : <h4>Status: Unavailable</h4>}
              <button id='edit-btn'>Edit Listing</button>
                <form>

                </form>
            </div>
          )
        })}
      </section>
    </main>
  )

}


export default Houses