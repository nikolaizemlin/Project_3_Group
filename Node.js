var axios= require('axios');


//authentication post to database
axios.post('/mem', {
    First_Name: '',
    Last_Name: '',
    Email: '',
    MemPassword: ''
  })

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  //blog post to database
  axios.post('/blog', {
    PostingID: int,
    MemBlog: ''
  })

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  //recipe post to database
  axios.post('/recipe', {
    reipeID: int,
    TypeofBeer: '',
    Ingredients: '',
    Instruction: ''
  })

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  
  