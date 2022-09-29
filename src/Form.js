import React from "react";

const RecipeForm = () => {
    return(
        <>
        
       <form>
       <label htmlFor="name">Submit your Recipe:</label>
                    <input type="text" placeholder="Type your name" id="name"/>
                    <input type="text" placeholder="Enter your recipe here!" id="name"/>   
                    <input type="submit"/> 
     </form>
     </>
    )

        
    
}
export default RecipeForm;