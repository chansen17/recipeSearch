import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe) => {
          return (
            <div key={recipe.recipe_id} className="col-md-4">
            <div className="card">
            <img className="img-responsive img-card-top" src={recipe.image_url} alt={`Thumnail for ${recipe.recipe_id}`} />
            <div className="card-body">
            <h4 className="card-title">
                { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">{recipe.publisher}</h6>
            <p><small>{recipe.publisher}</small></p>
            <Link className="btn btn-info" to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title }}}>View recipe</Link>
            </div>
            </div>
            </div>
          )
        })}
        </div>
    </div> // container
)

export default Recipes;