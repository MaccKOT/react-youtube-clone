import React, { Component, useState } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';

import youtube from '../api/youtube';

import { SearchBar, VideoList, VideoDetail } from './';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail />
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
