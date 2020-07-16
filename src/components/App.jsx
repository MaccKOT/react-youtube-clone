import React, { Component, useState } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';

import youtube from '../api/youtube';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                {/* {Search bar} */}
              </Grid>
              <Grid item xs={8}>
                {/* {Main video detail} */}
              </Grid>
              <Grid item xs={4}>
                {/* {Video list} */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
