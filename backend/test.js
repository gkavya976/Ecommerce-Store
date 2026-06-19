const mongoose = require("mongoose");

const uri =
"mongodb+srv://kavyaadmin:kavya123456@cluster0.zq8h3xl.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
.then(() => {
    console.log("CONNECTED SUCCESSFULLY");
    process.exit(0);
})
.catch(err => {
    console.error("FULL ERROR:");
    console.error(err);
    process.exit(1);
});