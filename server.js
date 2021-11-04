
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
//const router = express();

//declaring the port we are using.
const PORT = process.env.PORT || 3000;



//intentionally breaking this to test a fix. 

//'mongodb+srv://matt:Arsenal12@merncluster.gkugt.mongodb.net/test'

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect our local envionrment to mongoose. 
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://matt:Arsenal12@merncluster.gkugt.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

//require our application to use the routes folder.
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
