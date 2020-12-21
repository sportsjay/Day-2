import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Toolbar, AppBar, Container, Avatar } from '@material-ui/core';
import PermIdentityIcon  from '@material-ui/icons/PermIdentity';

export default class Body extends React.Component {

  text = ["P","R","O","F","I","L","E"];

  elements = {
    'main': Array(this.props.mainElement),
    'profile': Array(this.props.profileElement)
  };

  render(){
 
    //const { classes } = this.props;
    return (
      <div style={{...styles.root,}}>
        <div style={{display: 'flex', flexDirection: 'row',height: '80vh'}}>
          <div style={{flex:1, backgroundColor: 'red',...styles.center}}>
             {this.text.map(letter => <h1 style={{margin:0}}>{letter}</h1>)}
          </div>
          <div style={{flex:2, display: 'flex', flexDirection: 'column', backgroundColor: 'green',...styles.center }}>
            <div >
              <div style={{flex:4 ,...styles.box, ...styles.center}}>
              
                <h1>Get to know me!</h1>
                <Avatar src="/broken-image.jpg" style={{width: 80,height: 80, alignSelf: 'center'}}/>

                <div style={{...styles.center, flexDirection: 'column', marginTop: 20}}>
                  <span>Jason Nathanael</span>
                  <span>20</span>
                  <span>Jakarta</span>
                </div>
              </div>
              <div style={{flex:1, ...styles.box, padding: 20}}>
                <h4 style={{margin:0}}>Follow me!</h4>
                <p style={{margin:0, marginTop: 10}}>IG: @myusername</p>
              </div>
            </div>
          </div>
          <div style={{flex:5, backgroundColor: 'blue', ...styles.center}}>
            <div style={{width:'90%', height: '90%'}}>
              <div style={{flex:2, ...styles.box2}}>
                <p>few</p>
              </div>
              <div style={{flex:3, display: 'flex', }}>
                <div style={{flex:3, ...styles.box2, }}>
                <p>few</p>
                </div>
                <div style={{flex:1, ...styles.box2}}>
                <p>few</p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/*
        <Container className={this.classes.content}>
          <Container className={this.classes.profileText}>
            {this.text.map(letter => <h1>{letter}</h1>)}
          </Container>
          <Container className={this.classes.profileContent}>
            {this.elements['profile'].map(component => <Fragment key={Math.random()*100}>{component}</Fragment>)}
          </Container>
          <Container className={this.classes.profileAboutMe}>
            {this.elements['main'].map(component => <Fragment key={Math.random()*100}>{component}</Fragment>)}
          </Container>
        </Container>
*/}        
      </div>
    );
  }
}

const styles = {
  root: {
    backgroundColor:"#f2dede",
    color:"#004987",
    width: '100vw',
    height: '100vh',
  },
  box: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
  },
  box2: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  center: {
    display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center',
  }
}
/*
const styles = makeStyles((theme) => ({
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
*/