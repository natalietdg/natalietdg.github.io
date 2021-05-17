import './App.css';
import AboutMe from './pages/about-me/AboutMe';
import ArtPage from './pages/art/ArtPage.js';
import ReactAnime from 'react-animejs';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ProgrammingPage from './pages/programming/ProgrammingPage.js';
import {
  BrowserRouter as 
  Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom";
import * as BABYLON from 'babylonjs';

function App() {

  const { Anime, stagger } =  ReactAnime;
  const [loadStatus, setLoadStatus] = useState(!sessionStorage.noFirstVisit?true: false);

  function mouseOverEvent () {
    document.querySelector('.img-class').style.display='none';
    document.querySelector('.img-class2').style.display='block';
    document.getElementById('#nav-row').style.display='grid';
  }

  function mouseLeaveEvent () {
    document.getElementById('#nav-row').style.display='none';
  }

  return (
    <div>
      {sessionStorage.noFirstVisit &&
      <Anime
        initial={[
          {
            targets: '#none',
            duration: 1000,
          },
          {
            targets: '.first',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 1000,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1),
          },
          {
            targets: '.first',
            opacity: 0,
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 800,
            complete: function() {
              document.getElementById('#span').style.display='none';
            }
          },
          {
            targets: '.second',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 800,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          },
          {
            targets: '.third',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 800,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          },
          {
            targets: ['.second', '.third'],
            opacity: 0,
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 800,
            complete: function() {
              setLoadStatus(true)
            }
          }

        ]}
      >
        <div id="none"></div>
          <div className="span" id="#span">{Array.from(`Hello there!`).map((letter)=>{
            return <span className='first'>{letter}</span>
          })}</div>
          <div class="span">
          {Array.from("I'm Natalie.").map((letter)=>{
            return <span className='second'>{letter}</span>
          })}
          {Array.from(" And this is my portfolio.").map((letter)=>{
            return <span className='third'>{letter}</span>
          })}
          </div>
      </Anime>}
      {loadStatus && <Anime
        initial={[
          {
            targets: 'header',
            translateX:'100%',
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)'

          },
          {
            targets: 'dropdown-icon',
            easing: 'easeOutExpo',
            opacity: [0,1],
            duration: 800
          }
        ]}
        _onMouseEnter={[
          {
            targets:'#nav-row',
            translateY: '100%',
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)'
          }
        ]}
      >
        <Router>
            <div id="nav-area">
              <header>
                <h1>Natalie's Portfolio</h1>
               
                  <nav id="#nav-row" className="row">
                    <ul>
                      <li className="column" id='artPage'>
                        <Link to="/ArtPage">Creative Media & Design</Link>
                      </li>
                      <li className="column" id='aboutMe'>
                        <Link to="/AboutMe">About Me</Link>
                      </li>
                      <li className="column" id='softwareEngineering'>
                        <Link to="/ProgrammingPage">Software Engineering</Link>
                      </li>
                      {/* <li>
                        <Link to="/ProgrammingPage">PROGRAMMING</Link>
                      </li> */}
                    </ul>
                  </nav>
              </header>
            <Switch>
              <Route path='/ArtPage'>
                <ArtPage />
              </Route>
            </Switch>
            <Switch>
              <Route path='/AboutMe'>
                <AboutMe />
              </Route>
            </Switch>
            <Switch>
              <Route path='/ProgrammingPage'>
                <ArtPage />
              </Route>
            </Switch>
          </div>
        </Router>
        <div>
          
        </div>
      </Anime>}
        
    </div>
    
  );
}

export default App;
