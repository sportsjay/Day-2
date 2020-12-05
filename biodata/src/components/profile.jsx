import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Avatar, Container, Typography } from '@material-ui/core';

export default function Profile() {
  const elementStyle = {
    'imgContent': {
      borderRadius:10,
      marginTop:"20px",
      marginBottom:"20px", 
      backgroundColor:"white",
      textAlign:"center",
      padding:"40px"
    },
    'miscContent': {
      borderRadius:10,
      marginTop:"20px",
      backgroundColor:"white",
      textAlign:"center",
      padding:"40px"
    },
    'avatar':{width:"100px", height:"100px", margin:"auto", marginBottom:20},
    'img': {
      margin: 30,
    },
  }

  return (
    <Container>
      <Container style={elementStyle['imgContent']}>
        <h1>Get to know me!</h1>
        <Avatar style={elementStyle['avatar']} children={
          <PermIdentityIcon 
            style={elementStyle['avatar']}
            />
          } 
        />
        <Typography>Jason Nathaniel</Typography>
        <Typography>Umur: 20</Typography>
        <Typography>Jakarta</Typography>
      </Container>

      <Container style={elementStyle['miscContent']}>
        <Typography>Dari: Jakarta</Typography>
        <Typography>E-mail: abcdefg12345@gmail.com</Typography>
        <Typography>Contact: +01 234567</Typography>
      </Container>
    </Container>
  );
};