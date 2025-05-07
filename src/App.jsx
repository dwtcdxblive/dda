import { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GovOfDubai from './assets/govofdubai.png';
import DDA from './assets/dda.png';
import Tourist from './assets/resident.png';
import TouristSelected from './assets/resident-selected.png';
import Gov from './assets/gov.png';
import GovSelected from './assets/gov-selected.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<section className='background'>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      
      <img className="logo" src={GovOfDubai} alt='Gov Of Dubai Logo'/>
      
      </a>
          <a class="navbar-brand" href="#">
      
      <img className="logo" src={DDA} alt='Gov Of Dubai Logo'/>
      
      </a>

  </div>
</nav>

  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        <h2 className='title'><strong>SELECT A PERSONA</strong></h2>
      </div>
      <div className='col-md-6 mt-3 d-flex justify-content-center align-items-center'>
        <a target="blank" href='https://apps.apple.com/ae/app/uae-pass/id1377158818'><img className='abutton' src={Tourist}/></a>
      </div>
      <div className='col-md-6 mt-3 d-flex justify-content-center align-items-center'>
       <a target="blank" href='https://apps.apple.com/ae/app/uae-pass/id1377158818'><img className='abutton' src={Gov}/></a>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default App

