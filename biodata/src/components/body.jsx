import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography, FormControl, FormGroup, FormControlLabel, Checkbox,Avatar,LinearProgress } from '@material-ui/core';
import PermIdentityIcon  from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme) => ({
  progressBarOuter: {
    borderRadius:3,
    border:"1px solid black",
    margin:"auto",
    height:"10px",
  },
  progressBarInner: {
    borderRight:"1px solid black",
    backgroundColor:"#fbf8cd",
  },
}))
const ProgressBar = (props) => {

  const percent = props.percent;
  const width   = props.width;

  const classes = useStyles();
  return(
    <div 
      className={classes.progressBarOuter}
      style = {{
        width:width+"px", 
      }}
      >
      <div 
        className={classes.progressBarInner} 
        style={{
          width:(width*percent/100)+"px", 
          height:"10px"}}
        />
    </div>
  );
}

export default class Body extends React.Component {

  text = ["P","R","O","F","I","L","E"];

  elements = {
    'main': Array(this.props.mainElement),
    'profile': Array(this.props.profileElement)
  };
  hobby = ['coding', 'sleeping', 'eating', 'netflix', 'drawing']
  percent = [20,40,80,35,76]
  wide = 0;
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
                <h1 style={{textAlign:'right', margin: 0}}>Who am I?</h1>
                <p>I love coding as much as I love sleeping. :)</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Inventore adipisci sapiente assumenda quas. Dolorem qui, 
                  delectus nesciunt modi consequatur aspernatur quidem veniam 
                  quibusdam tempora vel architecto impedit facilis. Accusantium, 
                  aliquid.
                </p>
              </div>
              <div style={{flex:3, display: 'flex',marginTop: 20 }}>
                <div style={{flex:8, ...styles.box2, }}>
                  {this.hobby.map((hobbies, index)=>{
                    this.wide = this.percent[index];
                    return(
                    <div style={{flexDirection: 'row', display: 'flex', margin:10}}>
                      <span>{hobbies}</span>
                    <LinearProgress value={this.wide}  variant="determinate" style={{width: '50%'}}/>
                      <span>{this.percent[index]}</span>
                    </div>  
                    )
                  })}
                <h2>My hobbies</h2>
                </div>
                <div style={{flex: 0.5}}/>
                <div style={{flex:4, ...styles.box2}}>
                <h4 >Tell me about yourself!</h4>
                <FormControl component="fieldset">
                <FormGroup aria-label="position" column>
                  {
                    this.hobby.map((hobbies) =>{
                      return(
                        <FormControlLabel
                        value="opt1"
                        control={<Checkbox color="primary" />}
                        label={hobbies+ "?"}
                        labelPlacement="end"
                      />
                      )
                    })
                  }
                </FormGroup>
                </FormControl>
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