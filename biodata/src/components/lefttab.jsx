import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Toolbar, AppBar, Typography, Card, CardContent, Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"rgb(145, 157, 202)",
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    justifyContent:"center",
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
  leftcard: {
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    height:"40vh",
    [theme.breakpoints.up('md')]: {
      minWidth:"400px",
      width:"500px",
    },
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      width:"400px"
    }
  },
  rightCard: {
    display:"flex",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    height:"40vh",
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

  const elements = {
    'main': Array(props.mainElement),
    'profile': Array(props.profileElement)
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
          {new Array(1,2,3,4).map(item => <Button style={{color:"white", margin:10}} variant="contained" color="primary">{item}</Button>)}
          <Typography>This is me</Typography>
          {new Array(5,6,7,8).map(item => <Button style={{color:"white", margin:10}} variant="contained" color="primary">{item}</Button>)}
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <Card className={classes.leftcard}>
          {elements['profile'].map(component => <Fragment key={Math.random()*100}>{component}</Fragment>)}
        </Card>
        <Card className={classes.rightCard}>
          {elements['main'].map(component => <Fragment key={Math.random()*100}>{component}</Fragment>)}
        </Card>
      </Container>
    </div>
  );
}