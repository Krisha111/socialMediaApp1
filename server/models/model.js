const mongoose=require('mongoose')

const happy =new mongoose.Schema({
  username: {
        type: String,
     
      },
      photo: {
        type: String,
     
      },
    caption:{
        type: String,
       
    },

 })

const Category = mongoose.model("Category", happy)
// Adding a pre-save hook to check for duplicates

module.exports=Category;