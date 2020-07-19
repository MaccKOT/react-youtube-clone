import React, { Component, useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from '../api/youtube';
import mockupData from '../mock/';

import { SearchBar, VideoList, VideoDetail } from './';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit('javascript');
  }

  handleSubmit = async (searchTerm) => {
    let response = null;
    if (import.meta.env.SNOWPACK_PUBLIC_MOCKUP_MODE === 'true') {
      response = mockupData;
    } else {
      response = await youtube.get('search', {
        params: {
          q: searchTerm,
          part: 'snippet',
          maxResults: 5,
          key: import.meta.env.SNOWPACK_PUBLIC_YOUTUBE_API_KEY,
        },
      });
    }

    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <div>
        <Grid justify="center" container spacing={8}>
          <Grid item xs={10}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
        </Grid>

        <Grid justify="center" container spacing={6}>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
