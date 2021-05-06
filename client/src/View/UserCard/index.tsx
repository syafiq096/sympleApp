import { Avatar, Card, CardContent, createStyles, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }),
);


function Index() {
    const classes = useStyles();
    return (
        <Card>
          <CardContent>
            <Grid container spacing={3}>
                <Grid item md={2}>
                <Avatar alt="Remy Sharp" src="" className={classes.large}>
                    
                </Avatar>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="h6">
                        HELLO
                    </Typography>
                    <Divider />
                    <Typography variant="body2">
                        This is sample CRUD app
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Do try it
                    </Typography>
                </Grid>
                
            </Grid>
          </CardContent>
        </Card>
      );
}

export default Index
