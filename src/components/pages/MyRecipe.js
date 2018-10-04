import React from "react";
import { Link } from "react-router-dom";
import { Panel } from 'react-bootstrap';
import '../../styles/myrecipesheet.css';

const MyRecipe = () => (

    <div class="myrecipesheet">
    <h1 className="text-center">My Special Beer</h1>
    
    <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Crazy Good Pale Lady</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
<li>Some Hops</li>
<li>Pinch of White Chocolate</li>
<li>Some Honey</li>
<li>Mystery Herbs</li>
<li>Something else</li>

    </Panel.Body>
  </Panel>


    </div>
    
    );
    
    export default MyRecipe;