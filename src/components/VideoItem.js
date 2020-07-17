import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Card
      style={{ width: '450px', marginBottom: '20px' }}
      onClick={() => onVideoSelect(video)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          style={{ cursor: 'pointer' }}
          image={video.snippet.thumbnails.medium.url.toString()}
          title={video.snippet.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {video.snippet.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoItem;
