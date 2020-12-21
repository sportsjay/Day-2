import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Toolbar, AppBar, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#f2dede",
    color:"#004987"
  },
  appBar: {
    backgroundColor:"#004987",
  },
  toolbar: {
    marginLeft:40
  },
  content: {
    display:"flex",
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      flexDirection:"row",
      height:"100vh"
    },
    [theme.breakpoints.down('sm')]:{
      flexDirection:"column",
      alignItems:"center",
    }
  },
  profileText: {
    [theme.breakpoints.up('md')]: {
      textAlign:"center",
      minWidth:"100px",
      width:"100px"
    },
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  profileContent: {
    display: "flex",
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      minWidth:"400px",
      width:"500px",
    },
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      width:"400px"
    }
  },
  profileAboutMe: {
    display:"flex",
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      minWidth:"400px",
      width:"700px"
    },
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      width:"400px"
    }
  }
}));

export default function NavigationBar(props) {

  const classes = useStyles();
  const text = ["P","R","O","F","I","L","E"];

  const elements = {
    'main': Array(props.mainElement),
    'profile': Array(props.profileElement)
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
          <h1>My Name</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}