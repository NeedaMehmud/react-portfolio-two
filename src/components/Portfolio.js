import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript.jpg";
import project2 from "../images/password-generator.jpg";
import project3 from "../images/schedule.jpg";
import project4 from "../images/weather-dashboard.jpg";
import project5 from "../images/fido.jpg";
import project6 from "../images/revised-portfolio.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
}));

const projects = [
    {
        name: "CSS HTML Portfolio",
        description: `Portfolio created with CSS and HTML.
    All button are functional with sticky nav-bar and footer with
    mini projects on Github.`,
        image: project1,
    },
    {
        name: "Password Generator",
        description: `Application that enables employees to
    generate random passwords based on criteria that they’ve selected`,
        image: project2,
    },
    {
        name: "Scheduler",
        description: `A simple calendar application that
    allows a user to save events for each hour of the day by modifying starter code.`,
        image: project3,
    },
    {
        name: "Weather Dashboard",
        description: `A weather dashboard that will run in
    the browser and feature dynamically updated HTML and CSS.`,
        image: project4,
    },
    {
        name: "Fido Friendly",
        description: `The website uses OMDB and Does the Dog
    Die APIs to provide the information in a user friendly way.`,
        image: project5,
    },
    {
        name: "Revised Portfolio",
        description: `This is a revised portfolio using
    Bootstrap, CSS, HTML and JavaScript. The original portfolio was created using CSS and
    HTML.`,
        image: project6,
    },
];

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Projects */}
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Share
                </Button>
                                <Button size="small" color="primary" name="Project 1" to="www.google.com">
                                    Live Demo
                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;