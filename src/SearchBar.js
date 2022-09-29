import React from "react";

const SearchBar = () => {
    return(
        <>
        <h2>Welcome to the Bakery!</h2>
       <form>
                    <input type="text" placeholder="Search recipes" id="searchbar"/>  
                    <input type="submit" value="Search" /> 
     </form>
     </>
    )

        
    
}
export default SearchBar;