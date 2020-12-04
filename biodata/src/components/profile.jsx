import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';

export default function Profile() {
  const elementStyle = {
    'avatar':{width:"100px", height:"100px"},
    'img': {
      margin: 30,
    },
  }

  return (
    <Container>
      <Grid container item spacing={2}>
        <Grid style={elementStyle['img']}>
          <Avatar style={elementStyle['avatar']} children={
            <PermIdentityIcon 
              style={elementStyle['avatar']}
              />
            } 
          />
        </Grid>
        <Grid item style={{display:"flex", alignItems:"center"}}>
          <Typography>Name: Jason Nathaniel</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi pariatur doloribus dolorum atque ad minus debitis temporibus nulla, autem et aut id inventore alias sequi, magnam mollitia quibusdam. Sint, facere.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};