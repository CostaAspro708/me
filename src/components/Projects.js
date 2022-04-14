import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        paddingTop: 25,
    },
    paper: {
      height: 300,
      backgroundColor: '#1f2933a7',
      position: "relative",
    },
    header: {
        paddingRight: 10,
        paddingTop: 10,
        paddingLeft: 10,
        '& ul': {
            display: "flex",
            position: "absolute",
            bottom: 0,
            padding: 0,
            margin: 0,
            paddingBottom: 50,
            content: ">",
            '& li': {
                color: "#03dac591",
                paddingLeft: 20,

            }
        }
    },
    icons: {
        float: "right",
        paddingLeft: 10,
    },
    title: {
        color: "#03dac6",
    },
    content: {
        color: "#03dac6",
    },
   

  }));

  function Content(props){

    const classes = useStyles();

    var tags = props.tags;
    const listItems = tags.map((tag) =>
        <li>{tag}</li>
    );
    return(
        <div>
            <div className={classes.header}>
                
                <Link href={props.url} class='link' target="_blank"> <GitHubIcon className={classes.icons} sx={{ fontSize: 35 }} /> </Link>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.content}>{props.content}</p> 
                <ul className={classes.tags} class="list">
                    {listItems}
                </ul>
            </div>
        </div>
    );
  }

export default function Projects(){
    const matches = useMediaQuery('(max-width:700px)');
    if(matches){
        var xs = 12;
    }else{
        xs = 6;
    }
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["React", "Javascript", "Styled Components"]}title="Conway's game of life" content="A simple version of Conways game of life written in javascript with react. This project taught me how to manipulate html elements with the use of react hooks." url="https://github.com/CostaAspro708/conways-game-of-life"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["Python"]}title="Sokoban Solver" content="Sokoban is a puzzle video game genre in which the player pushes around boxes in a warehouse, trying to get them to specific locations. This application is able to solve these puzzles by using a uniform cost search algorithm." url="https://github.com/CostaAspro708/SokobanSolver"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                <Paper className={classes.paper} elevation={10}><Content tags={["React", "Javascript", "Styled Components"]}title="Personal Website" content="This website that you are currently looking at! I made this to showcase some of my projects and abilities to potential employers. This project taught me how to make a responsive website with the use of react components." url="https://github.com/CostaAspro708/SokobanSolver"/></Paper>
                </Grid>
            </Grid>
        </div>
    );
}

