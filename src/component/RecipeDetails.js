import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useGetRecipeByIdQuery } from '../features/ApiSlice'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
export default function RecipeDetails() {
    const {id} = useParams();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const { data:recipe, error, isLoading } = useGetRecipeByIdQuery({id});
  return (
    <Box sx={{ flexGrow: 1 }}>
    <h2>Recipe Details Page</h2>
    {isLoading? <h3>Loading....</h3>
    :
     <Grid container spacing={2}>
        <Grid xs={12}>
          <Item><CardMedia
              component="img"
              height="250"
              image= {recipe.image_url}
              alt={recipe.name}
            /></Item>
        </Grid>
        <Grid xs={12}>
          <Item> <Typography gutterBottom variant="h5" component="div">{recipe.name}</Typography></Item>
        </Grid>
        <Grid xs={6}>
          <Item><Typography gutterBottom variant="h5" component="div">
          <h2>Ingredients:</h2>
          {recipe.ingredients}
          </Typography></Item>
        </Grid>
        <Grid xs={6}>
        <Item><Typography gutterBottom variant="h5" component="div">
         <h2>Instructions:</h2> 
          {recipe.instructions}
          </Typography></Item>
        </Grid>
      </Grid>
    
    }
    </Box>
    
  )
}
