import React from 'react';
import { useEffect,useState } from 'react';
import ModelHero from '../components/ModelHero';
import VehichleModels from '../components/ VehichleModels';
import axios from 'axios';
import Booking from '../components/Booking';
const Models = () => {
  const [carModels, setCarModel] = useState([]);
const[bookingOpen,setBookingOpen]= useState(false)
const [selectedModel,setSelectedModel]=useState('')
  async function fetchModels() {
    const { data } = await axios.get(
      `https://car-rental-api.up.railway.app/car`
    );
    const models = data.data;
    setCarModel(models);
  }

  useEffect(() => {
    fetchModels();
  }, []);


  return (
<>
<Booking carModels= {carModels} bookingOpen={bookingOpen} setBookingOpen={setBookingOpen} selectedModel={selectedModel}

setSelectedModel={setSelectedModel}/>
<ModelHero/>
<VehichleModels
carModels={carModels}
setCarModel={setCarModel}
setBookingOpen={setBookingOpen}
setSelectedModel={setSelectedModel}
/>
</>

  );
}

export default Models;
