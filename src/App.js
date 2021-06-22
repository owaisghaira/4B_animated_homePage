import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { Grid, Typography,Button } from '@material-ui/core'
import Intro from './Images/Intro_Feature.svg'
import IntroBrain from './Images/Intro_Brain.svg'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Grid style={{ padding: 30 }} justify='center' container>
        <Grid item xs={12} md={6}>
          <h1 className='heading'> CORTEX </h1>
          <h5 className='heading2'>COPYWRITER</h5>
          <h5 style={{ color: 'white' }}>Enhance your communications with psychology-based copywriting and UX writing</h5>
          <Button size="large">
          Large
        </Button>
        </Grid>
        <Grid className='intro' item xs={12} md={6}>
          <img src={IntroBrain} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
