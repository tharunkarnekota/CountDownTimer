import React,{useState,useEffect} from 'react'
import Display from './Display'

const App = () =>{
  const [userdate,setUserdate] = useState("")
  const endTime = new Date(userdate +' 00:00:00').getTime();
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

      <br /><br />
      
        <input type="text" size="50" placeholder="mm dd yyyy" name="userdate" onChange={ e => setUserdate(e.target.value)} /><br />
        <h2>Enter Date to start timer</h2>
        
      <br /><br />

      <Display days={remainingdays}
               hours={remainingHours}
               minutes={remainingMinutes}
               seconds={remainingSeconds} />
                  
    </center>
  </div>
)

}

export default App