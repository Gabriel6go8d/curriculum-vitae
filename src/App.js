import React, {useEffect} from 'react';
import './App.css';
import './MyCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import {Image} from 'react-bootstrap'
import NavBar from './Components/NavBar';
import ContentMain from './Components/ContentMain';
import Picture from './Components/Picture';

function App() {

  const matches = window.matchMedia('(min-width:1000px)').matches  
  
  // useEffect(() => {
  //   const matches = window.matchMedia('(min-width:1000px)').matches
  //   if (matches) {
  //     document.getElementById('cont').classList.add('mt-5')
  //   }    
  // },[])

  return (
    <div className="App m-0 p-0">
      {!matches && <NavBar/>}

      <div id='cont' className='container' style={{backgroundColor: 'white', position: 'relative'}}>   

        <div className='row'>   
          {matches && <Navigation/>}  
          <ContentMain/> 
        </div>
      </div>
    </div>
  );
}

export default App;
