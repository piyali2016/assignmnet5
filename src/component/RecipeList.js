import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useGetAllRecipeQuery } from '../features/ApiSlice'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';


export default function RecipeList() {
    const { data:recipes, error:recipeErr, isLoading } = useGetAllRecipeQuery();
    return (
        <div>{isLoading?'Loading'
        :
        recipes.map(recipe => {
           return (
                <Card key={recipe.id} sx={{ maxWidth: 345, float:'left', margin:'20px' }} >
          <CardActionArea>
          <Link to={'details/'+recipe.id}>
            <CardMedia
              component="img"
              height="140"
              image= {recipe.image_url}
              alt={recipe.name}
            /></Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                 {recipe.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Link to={'details/'+recipe.id}>
      Recipe Details
      </Link>
          </CardActions>
        </Card>
            )
            
         })
        }</div>
        
        
      );
}
