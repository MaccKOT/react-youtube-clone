import React, { Component, useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from '../api/youtube';

import { SearchBar, VideoList, VideoDetail } from './';

export default class App extends Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: import.meta.env.SNOWPACK_PUBLIC_YOUTUBE_API_KEY,
      },
    });

    console.log(response);
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
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
    );
  }
}
