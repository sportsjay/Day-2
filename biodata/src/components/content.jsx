import React from 'react';

import { Container, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  intro:{
    borderRadius:10,
    backgroundColor:"white",
  },
  hobbies:{
    borderRadius:10,
    display:"flex",
    [theme.breakpoints.up('md')]: {
      flexDirection:"row",
    },
    [theme.breakpoints.down('sm')]:{
      flexDirection:"column",
      alignItems:"center",
    }
  },
  hobbies1:{
    borderRadius:10,
    backgroundColor:"white",
    [theme.breakpoints.up('md')]: {
      width:"55%"
    },
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      marginBottom:20
    }
  },
  hobbies2:{
    borderRadius:10,
    backgroundColor:"white",
    [theme.breakpoints.up('md')]: {
      width:"35%",
    },
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
    }
  },
  hobbiesContent: {
    borderRadius:10,
    display:"flex",
    justifyItems:"center"
  },
  hobbyText:{
    marginTop:20,
    marginBottom:20,
  }
}));

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

export default function Content() {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.intro}>
        <Typography><h2>Who am I?</h2></Typography>
        <Typography>Hello! I am Jason, but I prefer being called as Jay. Nice to meet you!</Typography>
        <p>I love coding as much as I love sleeping. :)</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Inventore adipisci sapiente assumenda quas. Dolorem qui, 
          delectus nesciunt modi consequatur aspernatur quidem veniam 
          quibusdam tempora vel architecto impedit facilis. Accusantium, 
          aliquid.
        </p>
      </Container>
      <div className={classes.hobbies}>
      <Container className={classes.hobbies1}>
          <div className={classes.hobbiesContent}>
            <Typography className={classes.hobbyText}>coding</Typography>
            <ProgressBar percent={40} width={200} />
          </div>
          <div className={classes.hobbiesContent}>
            <Typography className={classes.hobbyText}>sleeping</Typography>
            <ProgressBar percent={40} width={200}/>
          </div>
          <div className={classes.hobbiesContent}>
            <Typography className={classes.hobbyText}>netflix</Typography>
            <ProgressBar percent={40} width={200}/>
          </div>
          <div className={classes.hobbiesContent}>
            <Typography className={classes.hobbyText}>eating</Typography>
            <ProgressBar percent={40} width={200}/>
          </div>
          <h3>My Hobbies!</h3>
      </Container>
      <Container className={classes.hobbies2}>
        <h3>Tell me about yourself:</h3>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column>
              <FormControlLabel
                value="opt1"
                control={<Checkbox color="primary" />}
                label="Coding?"
                labelPlacement="end"
              />
              <FormControlLabel
                value="opt2"
                control={<Checkbox color="primary" />}
                label="Sleeping?"
                labelPlacement="end"
              />
              <FormControlLabel
                value="opt3"
                control={<Checkbox color="primary" />}
                label="Netflix?"
                labelPlacement="end"
              />
              <FormControlLabel
                value="opt4"
                control={<Checkbox color="primary" />}
                label="Eating?"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
      </Container>
      </div>
    </Container>
  );
};