import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipe} className="form-group">
        <label htmlFor="recipeName">Search Recipe</label>
        <input type="text" name="recipeName" id="recipeName" className="form-control mb-4"/>
        <button type="button" className="btn btn-info">Find recipes</button>
    </form>
);

export default Form;