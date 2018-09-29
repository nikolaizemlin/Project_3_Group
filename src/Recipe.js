import React from "react";


const Recipe =()=>(
    <div>

    <h1>Share with Us Some Of Your Favorite Beer Recipes</h1>


  Name of Recipe:<br></br>
  <input type="text" name="firstname"></input>
  <br></br>
  <p>Type of Beer</p>
  <select name="beers">
    <option value="ale">Ale</option>
    <option value="amber">Amber</option>
    <option value="bock">Bock</option>
    <option value="brown">Brown</option>
    <option value="cream">Cream Ale</option>
    <option value="hefeweizen">Hefeweizen</option>
    <option value="ipa">IPA</option>
    <option value="kolsch">K&ouml;lsch</option>
    <option value="lager">Lager</option>
    <option value="mexican">Mexican/Latin American</option>
    <option value="Oktoberfes">Oktoberfes</option>
    <option value="paleAle">Pale Ale</option>
    <option value="pilsner">Pilsner</option>
    <option value="porter">Porter</option>
    <option value="redAle">Red Ale</option>
    <option value="scottish">Scotch Ale</option>
    <option value="sour">Sour Ale</option>
    <option value="stout">Stout</option>
    <option value="other">Other</option>
  </select>
<br></br>
<br></br>

<h2>Required Ingredients</h2>
 <textarea name="ingredients"></textarea>
 
 <h2>Instruction</h2>
 <textarea name="instruction" ></textarea>


 

<br></br>
<br></br>
<button>Submit Recipe</button>



    </div>
)

export default Recipe;