import React,{useState,useEffect} from 'react'
import Display from './Display'

const App = () =>{
  const endTime = new Date('september 25,2021 00:00:00').getTime();
  const [currentTime,setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime  //177670892  gap will be in milliseconds

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingdays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  // (2000%60000)/1000 => 2 seconds

  useEffect(()=>{
    setTimeout(()=>setcurrentTime(new Date().getTime()),1000)
  },[currentTime])
  


return (
  <div>
    <center>

      <Display days={remainingdays}
               hours={remainingHours}
               minutes={remainingMinutes}
               seconds={remainingSeconds} />

    </center>
  </div>
)

}

export default App