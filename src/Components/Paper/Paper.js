import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../Paper/Paper.js'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '100%',
        margin: "20px auto"
    },
}));

export default function PaperSheet(props) {
    const classes = useStyles();

    return (
        <div>
             <Grid container justify="center" >
            <Grid item xs={12} sm={8} md={10} lg={6} >
           
            <Paper className={classes.root}>
                {
                    props.children
                }
            </Paper>
                    </Grid>
                    </Grid>
        </div>
    );
}