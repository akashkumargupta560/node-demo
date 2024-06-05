// // const express = require("express");
// // const app = express();
// // const mongoose = require('mongoose');

// // const main = async () => {
// //     await mongoose.connect("mongodb://localhost:27017/ecommerce");
// //     const ProductSchema = new mongoose.Schema({
// //         name: String // Corrected here
// //     });
// //     const ProductsModel = mongoose.model('userinfo', ProductSchema); // Changed collection name to 'Product'
// //     let data = new ProductsModel({
// //         name: "akash"
// //     });
// //     let result = await data.save();
// //     console.log(result);
// // }
// // main();
// // app.listen(3000, function () {
// //     console.log("App is running on Port 3000");
// // });

// const mongoose = require('mongoose');
//  mongoose.connect("mongodb://localhost:27017/ecommerce", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
// });

// const productSchema = new mongoose.Schema({
//     name: String,
//     username:String,
//     email:String,
//     website:String,
//     phone:Number
// });

// const insertDb = async () => {

//     const ProductsModel = mongoose.model('userinfos', productSchema);

//     let data = new ProductsModel({
//         name: "Ervin Howell",
//         username:"Antonette",
//         email:"Shanna@melissa.tv",
//         website:"anastasia.net",
//         phone:8976201079
//     });

//     let result = await data.save();
//     console.log(result);
   
// }
// // insertDb()
// const updateDb = async()=>{
//     const ProductsModel = mongoose.model('userinfos', productSchema);
//     let data = await ProductsModel.updateOne(
//         {username:"Bret"},
//         {
//             $set:{phone:9991110001}
//         }
//     )
//     console.log(data);
// }
// // updateDb()

// const deleteDb =async() =>{
//     const ProductsModel = mongoose.model('userinfos', productSchema);
//     let data = await ProductsModel.deleteOne({username:"gupta"});
//     console.log(data);
// }

// // deleteDb();

// const findDb = async() =>{
//     const ProductsModel = mongoose.model('userinfos', productSchema);
//     let data = await ProductsModel.find();
//     console.log(data);
// }

// // findDb();

