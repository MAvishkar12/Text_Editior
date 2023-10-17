// import About from "./Components/About";
import Navbar from "./Components/Navbar";
 import Text from "./Components/Text"; 
 import { useState } from "react";
 import Alert from "./Components/Alert";
 import About from "./Components/About";
 import {Routes,Route} from 'react-router-dom'








const App=()=> {

      const [alert,setalert] = useState(null)

      const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })

        setTimeout(()=>{
          setalert(null)

        },1500)
        

      }

  const[mode,setmode]=useState('light')
  const toogleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark Mode has been enabled","success");
      document.title="Text Utils - Dark Mode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been  enabled","success");
      document.title="Text Utils- Light Mode"
    }
  }

  
  return (
    <>
  
   
  
  <Navbar title="Textutils2" about="About Us" mode={mode} toogleMode={toogleMode}/> 
   <Alert alert={alert} ></Alert>
  
  <div className="container"  >
    <Routes>

      <Route path="/" element={<Text mode={mode} showAlert={showAlert} title="Enter text here"/>} />
      <Route path="about" element={<About/>} />
  

      </Routes>
  </div>


 
    
  

    </>
   
  );
}

export default App;
