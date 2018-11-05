import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Recipes from './components/Recipes';

// api
import './components/api';

import './App.css';
import API_KEY from './components/api';

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const API_CALL = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`);
    const data = await API_CALL.json();
    this.setState({
      recipes: data.recipes
    })
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      recipes: recipes
    });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="container-fluid"> 
        <Title />
        <Form getRecipe={this.getRecipe} />
        {/* Render all recipe results */}
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
