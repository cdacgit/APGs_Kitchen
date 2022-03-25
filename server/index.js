const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt")
const saltRounds = 10



app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
})
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'loginsystem',
    });


app.post("/register",(req, res) => {

    const fname = req.body.fname
    const lname = req.body.lname
    const mobile = req.body.mobile
    const address = req.body.address
    const email = req.body.email
    const password = req.body.password

    bcrypt.hash(password,saltRounds, (err, hash) => {

        if(err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO users (fname, lname, mobileno, email, password, address) VALUES (?,?,?,?,?,?)",
            [fname, lname, mobile, email, hash,address],
            (err, result) => {
                console.log(err);
            }
        )

    })
   
})    

app.post("/login",(req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ?;",
        email,
        (err, result) => {
            if(err){
                res.send({err: err})
            }

            if(result.length > 0){
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if(response){
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result)
                        alert({message: "Login Sucessful"})
                    } else {
                        alert({message: "Wrong email/password combination"})
                    }
                })
            }else{
                alert({message: "user doesn't exist"})
            }
        }
    )
})

app.listen(5000,() => {
    console.log("Running on port 5000");
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require('cors')
// const app = express();
// const mysql = require("mysql");

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'mydata',
// });

// // app.get("/",(req, res) => {

//     // const sqlInsert = 
//     // "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception','good movie');"
//     // db.query(sqlInsert, (err, result) => {
//     //     // if(err){
//     //     //     console.log(err)
//     //     // }else{
//     //     //     res.send("Values Inserted")
//     //     // }
//     //     res.send("Hello");
//     // });
   
// // });

// app.use(cors());
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}))

// app.post("/api/insert",(req, res)=>{

//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert = 
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
//     db.query(sqlInsert,[movieName, movieReview],(err, result)=>{
//         console.log(result);
//     });
// });

// app.listen(3001,() => {
//     console.log("Running on port 3001");
// })