import './index.css'
import React from 'react'
import { HomePage } from './pages/HomePage'
import { EntertainPage } from './pages/EntertainPage'
import { PhoneNavbar } from './components/PhoneNavbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { useState,useEffect } from 'react'
import { Footer } from './components/Footer'
import { TechnologyPage } from './pages/TechnologyPage'
import { LifeandSocietyPage } from './pages/LifeandSocietyPage'
import { SportPage } from './pages/SportPage'
import { DealsPage } from './pages/DealsPage'
import { Covid19Page } from './pages/Covid19Page'
import { BacIIPage } from './pages/BacIIPage'
import { AutoTalkPage } from './pages/AutoTalkPage'
import { HealthyLifePage } from './pages/HealthyLifePage'
import { StartingUpPage } from './pages/StartingUpPage'
import { QuizPage } from './pages/QuizPage'

function App() {

  const [phone,setPhone] = useState(false);

  useEffect(() => {
    function handleNav(){
      if(window.innerWidth > 768){
        setPhone(false)
      }else{
        setPhone(true)
      }
    }
    window.addEventListener('resize',handleNav);
    window.addEventListener('load',handleNav);
  });

  return (
    <BrowserRouter>
      <div>
        { phone ? <PhoneNavbar /> : <Navbar /> }
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/entertain" component={EntertainPage} />
        <Route path="/technology" component={TechnologyPage} />
        <Route path="/lifeandsociety" component={LifeandSocietyPage} />
        <Route path="/sport" component={SportPage} />
        <Route path="/deals" component={DealsPage} />
        <Route path="/covid19" component={Covid19Page}/>
        <Route path="/bacII" component={BacIIPage} />
        <Route path="/autotalk" component={AutoTalkPage} />
        <Route path="/healthylife" component={HealthyLifePage} />
        <Route path="/startingup" component={StartingUpPage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
