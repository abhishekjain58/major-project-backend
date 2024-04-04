const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
     }, 
     description: String,
     image: {
         type: String,
         default:
            "https://unsplash.com/photos/a-snow-covered-mountain-range-under-a-night-sky-9lVdzDECVqk",
         set: (v) => v === "" 
         ? "https://unsplash.com/photos/a-snow-covered-mountain-range-under-a-night-sky-9lVdzDECVqk" : v,
      }, 
     price: Number,
     location: String,
     country: String,
 });

 const Listing = mongoose.model("Listing", listingSchema);
 module.exports = Listing;