const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;

//const users = require("./users");
var uuidv4 = require('uuid/v4');

const exportedMethods = {
   async getAllPosts() {
     const postCollection = await recipes();
     const dbcont = await postCollection.find({}).toArray();
     //return dbcont
      
   },

   async getPostById(id) {
     if(!id){
       throw "Invalid Id"
     }
     
     if(arguments.length!=1){
       throw "Invalid number of parameters"
     }
     
     else{
      const postCollection = await recipes();
      const post = await postCollection.findOne({ _id: id });

      if (!post) throw "Recipe not found";
      return post;
      }
    },
   
    async addPost(name, about, review) {
      const postCollection = await recipes();
      var uidrestaurant = uuidv4();
      var uidreview = uuidv4();
      var uidposter = uuidv4();
      const newPost = { 
        name: name,
        about: {
          name:about.name,
          state:about.state,
          city:about.city,
          location:about.location,
          description:about.description,
          cuisine:about.cuisine,
          timing:about.timing,
          contact:about.contact
        },
        review: [{
          _id:uidreview,
          poster:{
            name:review.poster.name,
            _id:uidposter
          },
          comment:review.comment,
          rating:review.rating
        }],

        _id: uidrestaurant
      };

      return postCollection
        .insertOne(newPost)
        .then(newInsertInformation => {
          return newInsertInformation.insertedId;
        })
        .then(newId => {
          return this.getPostById(newId);
        });
      //return await this.getPostById(newId);
        
    },

  
    async removePost(id) {
      if(!id){
        throw "Invalid Id"
      }
      
      if(arguments.length!=1){
        throw "Invalid number of parameters"
      }

      else{
        const postCollection = await recipes();
        const deletionInfo = await postCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete post with id of ${id}`;
        }
      }
    },

    async updatePost(id, updatedPost) {
      if(Object.keys(updatedPost).length !=3){
        throw 'Error:Invalid'
      }
      if(!id){
        throw "Invalid Id"
      }
      if (updatedPost.ingredients) {
     
        if(!(Array.isArray(updatedPost.ingredients))) {
          throw "ingredients should be array" 
          //ingredients = [];
        }
        
        if(updatedPost.ingredients===undefined || updatedPost.ingredients.length==0){
          throw "Ingredients is empty"
        }
        
        if(Array.isArray(updatedPost.ingredients)){
          for(var i=0;i<updatedPost.ingredients.length;i++){
            if(updatedPost.ingredients[i].constructor===Object){//typeof ingredients[i] === 'object'){
            }
            else{
              throw "Ingredients should be object"
            }
          }
        }
        
        if(Array.isArray(updatedPost.ingredients)){
          for(var i=0;i<updatedPost.ingredients.length;i++){
            if(updatedPost.ingredients[i].constructor===Object){//typeof ingredients[i] === 'object'){
              if(updatedPost.ingredients[i].name!==null || updatedPost.ingredients[i].amount!==null){
                var name = updatedPost.ingredients[i].name
                var amount = updatedPost.ingredients[i].amount
                var name1 = name.replace(/\s/g,"")
                var amount1 = amount.replace(/\s/g,"")
                if(name1.length<1 ||amount1.length<1){
                  throw "Contents of ingredients is Empty"
                }              //throw "Contents of Ingredients is Empty"
              }
            }
          }
        }
      }
      
      
      else{
        throw "Invalid"
      }

    
    
      if (updatedPost.title) {
        if (typeof updatedPost.title !== "string"){
          throw "Title is not string"
        }
        
        if(updatedPost.title==""){
          throw "Title is Empty"
        }
        
        title1 = updatedPost.title.replace(/\s/g,"")
        if(title1==""){
          throw "Title is Empty"
        }
 
      }
      else{
        throw "Invalid"
      }
    
      if (updatedPost.steps) {
        if(!Array.isArray(updatedPost.steps)) {
          throw "steps should be array"   
          //steps = [];
        }
        
        if(updatedPost.steps===undefined || updatedPost.steps.length==0){
          throw "Steps is empty"
        }
        
        if(Array.isArray(updatedPost.steps)){
          for(var i=0;i<updatedPost.steps.length;i++){
            if(typeof updatedPost.steps[i] !=='string'){
              throw "Contents of steps should be string"
        
            }
          }
        }
        
        for(var i=0;i<updatedPost.steps.length;i++){
          stepsspace = updatedPost.steps[i].replace(/\s/g,"")
          if(stepsspace ==""){
            throw "Contents of steps is Empty"
          }
        }
      }
      else{
        throw "Invalid"
      }
    
      return this.getPostById(id).then(currentUser => {
        let userUpdateInfo = {
          title: updatedPost.title,
          ingredients: updatedPost.ingredients,
          steps:updatedPost.steps
        };

        let updateCommand = {
          $set: userUpdateInfo
        };

        return recipes().then(postCollection => {
        return postCollection.updateOne({ _id: id }, updateCommand).then(() => {
        return this.getPostById(id);
        });
      });
    });
  
  },


  async updatePatch(id, updatedPost) {
    
   if(!id){
     throw "Invalid Id"
   } 
   else{
    const postCollection = await recipes();
    const updatedPostData = {};
    if (updatedPost.ingredients) {
      if(updatedPost.ingredients === null){
        throw "ingredients is null"
      }
      
      if(!(Array.isArray(updatedPost.ingredients))) {
        throw "ingredients should be array" 
        //ingredients = [];
       }
       
       if(updatedPost.ingredients===undefined || updatedPost.ingredients.length==0){
        throw "Ingredients is empty"
      }
      
      if(Array.isArray(updatedPost.ingredients)){
        for(var i=0;i<updatedPost.ingredients.length;i++){
          if(updatedPost.ingredients[i].constructor===Object){//typeof ingredients[i] === 'object'){
          }
          else{
            throw "Ingredients should be object"
          }
        }
      }
      
      if(Array.isArray(updatedPost.ingredients)){
        for(var i=0;i<updatedPost.ingredients.length;i++){
          if(updatedPost.ingredients[i].constructor===Object){//typeof ingredients[i] === 'object'){
            if(updatedPost.ingredients[i].name!==null || updatedPost.ingredients[i].amount!==null){
              var name = updatedPost.ingredients[i].name
              var amount = updatedPost.ingredients[i].amount
              var name1 = name.replace(/\s/g,"")
              var amount1 = amount.replace(/\s/g,"")
              if(name1.length<1 ||amount1.length<1){
                throw "Contents of Ingredients is Empty"
              }              //throw "Contents of Ingredients is Empty"
            }
          }
        }
      }
      
      
      
       updatedPostData.ingredients = updatedPost.ingredients;
        
    }          
        
    

     if (updatedPost.title) {
      if (typeof updatedPost.title !== "string"){
        throw "Invalid Input"
      }

        if(updatedPost.title === null){
          throw "Title is null"
        } 

        if(updatedPost.title==""){
          throw "Title is Empty"
        }

        title1 = updatedPost.title.replace(/\s/g,"")
        if(title1==""){
          throw "Title is Empty"
        }
        
       updatedPostData.title = updatedPost.title;
        
      }

     

    if (updatedPost.steps) {
      if(!Array.isArray(updatedPost.steps)) {
        throw "steps should be array"   
        //steps = [];
      }
      if(updatedPost.steps===undefined || updatedPost.steps.length==0){
        throw "Steps is empty"
      }
      if(Array.isArray(updatedPost.steps)){
        for(var i=0;i<updatedPost.steps.length;i++){
          if(typeof updatedPost.steps[i] !=='string'){
            throw "Contents of steps should be string"
        
          }
        }
      }

      for(var i=0;i<updatedPost.steps.length;i++){
        stepsspace = updatedPost.steps[i].replace(/\s/g,"")
        if(stepsspace ==""){
          throw "Contents of steps is Empty"
        }
      }
      
    
      updatedPostData.steps = updatedPost.steps;
    }
    if(Object.keys(updatedPostData).length===0){
        throw "Invalid"
    }
    

    let updateCommand = {
      $set: updatedPostData
    };
    const query = {
      _id: id
    };
    await postCollection.updateOne(query, updateCommand);

    return await this.getPostById(id);
  }

  },

};

module.exports = exportedMethods;