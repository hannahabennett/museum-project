const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// Configuring the database
const config = require('./DB');
const mongoose = require('mongoose');
const Visitor = require('./models/Museums');
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(config.url, { useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to MongoDB.");    
 
    Visitor.deleteOne({}, function(err) { 
 
       if(err){
          console.log(err);
          process.exit();
       }
       
       console.log('Visitor collection removed');
       // -> initial new data
       initial();
    });
 
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
    

const cors = require('cors')
// const corsOptions = {
//   origin: 'http://localhost:1234/',
//   optionsSuccessStatus: 200
// }
 
app.use(cors())
  const museumsRoute = require('./routes/museums.route');
  app.use('/', museumsRoute);
   const port = process.env.PORT || 1234;

// Create a Server
  const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });

    module.exports = app;

    
function initial(){
 
    let visitors = [
      {
        firstname: "Joe",
        lastname: "Thomas",
        emailAddress: "joe@gmail.com",
        zipCode: '35123',
        groupSize: 5,
        howDidYouHearAboutUs: "online",
        country: "United States",
        guestType: "Faculty",
        className: "GBA90",
        professorName: "John Meyer"
      },
      {
        firstname: "Dani",
        lastname: "Wood",
        emailAddress: "dani@gmail.com",
        zipCode: '35123',
        groupSize: 3,
        howDidYouHearAboutUs: "social media",
        country: "United States",
        guestType: "Alumni",
        className: "BIS90",
        professorName: "John Kazan"
      },
      {
        firstname: "Celia Blake",
        lastname: "Dean",
        emailAddress: "cb@gmail.com",
        zipCode: '35123',
        groupSize: 5,
        howDidYouHearAboutUs: "Billboard",
        country: "United States",
        guestType: "Undergraduate Student",
        className: "MIS100",
        professorName: "Jeff Lucas"
      },
     
    ]
   
    // Init data -> save to MongoDB
 
    for (let i = 0; i < visitors.length; i++) { 
        const visitor = new Visitor(visitors[i]);
        visitor.save();
    }
 
    console.log(">>> Done - Initial Data!");
}
