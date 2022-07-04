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
                    <Paper className={classes.paper} elevation={10}><Content tags={["Python", "AI", "Machine Learning"]}title="Machine learning flower classifier" content="An image classifier that utilises transfer learning (TL) where the mobilenetv2 network was retrained to classify five different types of flowers." url="https://github.com/CostaAspro708/TransferLearning"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["Javascript", "React", "Regex","Tailwind"]}title="Wordle Solver" content="Wordle is a popular puzzle game where the user tries to guess the letters of a random five letter word. Using regex and incorrect/correct letters we can narrow down the available words and win the game." url="https://github.com/CostaAspro708/wordle-solver"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["Javascript", "React", "Recursion"]}title="Soduko Solver" content="A web application to help solve soduko puzzles. This applicaiton was made in javascript and uses back tracking to find the solved state." url="https://github.com/CostaAspro708/sudoku-solver"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["React", "Javascript"]}title="Conway's game of life" content="A simple version of Conways game of life written in javascript with react. This project taught me how to manipulate html elements with the use of react hooks." url="https://github.com/CostaAspro708/conways-game-of-life"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["Python", "OOP", "Search Tree"]}title="Sokoban Solver" content="Sokoban is a puzzle video game genre in which the player pushes around boxes in a warehouse, trying to get them to specific locations. This application is able to solve these puzzles by using a uniform cost search algorithm." url="https://github.com/CostaAspro708/SokobanSolver"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                    <Paper className={classes.paper} elevation={10}><Content tags={["Javascript", "React", "Tailwind", "Node", "API"]}title="Basketball Analytics" content="A full-stack project using node and react to scrape box scores and statistics from basketballreference.com so I am able to calculate and compare fantasy scores" url="https://github.com/CostaAspro708/BasketballAnalytics"/></Paper>
                </Grid>
                <Grid item xs={xs}>
                <Paper className={classes.paper} elevation={10}><Content tags={["React", "Javascript", "Styled Components"]}title="Personal Website" content="This website that you are currently looking at! I made this to showcase some of my projects and abilities to potential employers. This project taught me how to make a responsive website with the use of react components." url="https://github.com/CostaAspro708/SokobanSolver"/></Paper>
                </Grid>
            </Grid>
        </div>
    );
}
