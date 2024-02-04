const app = require("./app");
const { connectDatabase } = require("./config/database");
// import {v2 as cloudinary} from 'cloudinary'
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({ 
  cloud_name: 'dqo4luade', 
  api_key: '759449537978579', 
  api_secret: '-RlKAkSd17xwRc9lXXg1hlSBCHo' 
});

if (cloudinary.config().cloud_name) {
  console.log("Cloudinary connected!");
} else {
  console.log("Cloudinary is not connected. Check your configuration.");
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
