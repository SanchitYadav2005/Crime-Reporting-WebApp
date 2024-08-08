import {useEffect, useState} from 'react'
import axios from 'axios'

import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState();
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("http://localhost:8080/");
      if(res){
        setData(res.data)
        console.log(data)
      }
    }
    getData()
  },[])
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
