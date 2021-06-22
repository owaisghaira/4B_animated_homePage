import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { Grid, Typography, Button } from '@material-ui/core'
import Intro from './Images/Intro_Feature.svg'
import IntroBrain from './Images/Intro_Brain.svg'
import useWebAnimations, { bounce, heartBeat } from "@wellyshen/use-web-animations";
import mobile from './Images/mobile.gif'
function App() {

  const brain = useWebAnimations({
    playbackRate: 0.5,
    keyframes: [{ transform: "translate(0px,50px)" }],
    animationOptions: { duration: 1000, iterations: Infinity, direction: 'alternate' },

  });
  const heading = useWebAnimations({ ...bounce });
  const button = useWebAnimations({ ...heartBeat });

  return (
    <div className="app">
      <NavBar />
      <Grid style={{ padding: 30 }} justify='center' container>
        <Grid item xs={12} md={6}>
          <h1 ref={heading.ref} className='heading'> CORTEX </h1>
          <h5 className='heading2'>COPYWRITER</h5>
          <h5 style={{ color: 'white' }}>Enhance your communications with psychology-based copywriting and UX writing</h5>
          <button ref={button.ref} className='btn'>Click For Details</button>
        </Grid>
        <Grid className='intro' item xs={12} md={6}>
          <img ref={brain.ref} src={IntroBrain} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
