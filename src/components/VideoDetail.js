import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={3} style={{ height: '65%' }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          width="100%"
          height="100%"
          title="video player"
        />
      </Paper>
      <Paper elevation={3} style={{ padding: '15px' }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          <Grid container item xs>
            <YouTubeIcon style={{ color: 'red' }} />
            {video.snippet.channelTitle}
          </Grid>
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
