import React from 'react';
import './App.css';
import './MyCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation2 from './Components/Navigation2';
import NavBar from './Components/NavBar';
import ContentMain from './Components/ContentMain';

function App() {

  const matches = window.matchMedia('(min-width:1000px)').matches  
  
  // useEffect(() => {
  //   const matches = window.matchMedia('(min-width:1000px)').matches
  //   if (matches) {
  //     document.getElementById('cont').classList.add('mt-5')
  //   }    
  // },[])

  return (
    <div className="App m-0 p-0 setboddy">
      {!matches && <NavBar/>}

      <div className='container content' style={{backgroundColor: 'white'}}>
        <div className='row'>   
          {matches && <Navigation2/>}  
          <ContentMain/> 
        </div>
      </div>
    </div>
  );
}

export default App;
