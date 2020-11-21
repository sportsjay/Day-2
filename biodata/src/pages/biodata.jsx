import React from 'react';

import { Avatar, Card, CardContent, CardHeader, colors, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    backgroundColor: colors.red[400],
    height: "100px",
    width:"100px"
  }
}));

const Biodata = () => {
  const classes = useStyles();

	return (
		<div styles={{margin:"auto"}}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.details}>
              <Avatar className={classes.avatar}>
                JN
              </Avatar>
              <Typography>
                Name: Jason Nathaniel
              </Typography>

              <Grid container alignItems="center">
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolorum soluta consequatur ullam ex molestiae obcaecati, beatae asperiores, alias odio quis dolor impedit vitae quisquam maiores saepe adipisci nemo itaque?
                </Typography>
                <Divider variant="middle" style={{backgroundColor:colors.grey}}/>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iure obcaecati nisi laboriosam totam fugiat, deleniti, esse sapiente sed similique mollitia at? Veniam molestias quaerat, incidunt fuga cumque corporis adipisci.
                </Typography>
              </Grid>
              
            </div>
          </CardContent>
        </Card>
    </div>
  );
}

export default Biodata;