import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DetailsPokemon from './DetailsPokemon'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
    

const CardsPokemon = () => {
    const classes = useStyles();
    return ( 
<<<<<<< HEAD
        <>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://vignette.wikia.nocookie.net/mario/images/a/a0/Pikachu_SSB4.png/revision/latest/scale-to-width-down/310?cb=20130611183913&path-prefix=es"
          title="Pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              ID
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Nombre
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           tipo 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    
</>
    )
=======
        <div>
        <h3>What is that pokemon?</h3>
        </div>
        
     );
>>>>>>> abf8529b6547474282368d7c53760053946ad7e3
}
 
export default CardsPokemon;




