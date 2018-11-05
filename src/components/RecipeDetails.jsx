import React from 'react';
import { Link } from 'react-router-dom';
import API_KEY from './api';

class RecipeDetails extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        // get recipe state from Link component
        const title = this.props.location.state.recipe;
        // api request
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        // catch response
        const res = await req.json();
        this.setState({
            activeRecipe: res.recipes[0]
        });
        console.log(this.state.activeRecipe)
    }
 
    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container text-center">
                {
                    this.state.activeRecipe.length !== 0 && 
                    <div>
                    <div className="jumbotron">
                        <h1 className="text-center">{recipe.title}</h1>
                        <h4>By: {recipe.publisher}</h4>
                        <small><p><span className="badge badge-primary">Popularity: {recipe.social_rank}</span></p></small>
                    </div>
                    <div className="image-container">
                        <img style={{ width: "18rem"}} src={recipe.image_url} alt={`${recipe.title} thumbail`}/>  
                        <p><a target="_blank" href={recipe.source_url}>Recipe</a></p>
                    </div>
                    <Link to="/">Go Home</Link>
                    </div>
                }
            </div>
        )
    }
}

export default RecipeDetails;