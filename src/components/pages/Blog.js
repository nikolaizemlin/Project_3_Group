import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from 'react-bootstrap';
import '../../styles/blog.css';
import axios from 'axios';




const Blog = () => (

<div class="blogsheet">
<h1 className="text-center">Share the Joy of Beer!</h1>
<ButtonToolbar>
<Button bsStyle="primary" onclick="panel">Click Here! To Post some Text</Button>
</ButtonToolbar>


</div>

);

export default Blog;