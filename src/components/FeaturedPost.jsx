import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    title: {
        fontSize: 40,
        fontFamily: "Montserrat"
    },
    cover: {
        backgroundImage: `url(https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "35px 25px",
    }
})

const FeaturedPost = () => {
    const classes = useStyles();

    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title}>Title of a longer featured blog post</Typography>
                <Typography variant="h5">
                    Multiple lines of text that form the idea, informing new readers
                    quickly and efficiently about what's most interesting in this post's
                    contents.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" className={classes.btn}>
                    Read more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost
