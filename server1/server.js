const express = require("express");
const app = express();
const PORT = 4000;


//GET METHOD: URL: http://Localhost:4000/test
app.get("/test", (request, response) => {
    response.send("Hello from my server");
});

app.get("/fruits", (request, response) => {
    const fruitArray = [
        { Course_name: "MERN", days: "30", price: 4000 },
        { Course_name: "Python", days: "30", price: 5000 },
        { Course_name: "Web Dev", days: "30", price: 12000 },
        { Course_name: "Cyber Security", days: "30", price: 400 },
        { Course_name: "Cloud", days: "30", price: 9000 },
        { Course_name: "Project Management", days: "30", price: 10000 },
    ];

    response.send({
        status: "success",
        message: "data send",
        fruitArray: fruitArray,
    });
});


app.post("/login", (request, response) => {
    response.send("POST Method called");
});

app.put("/update", (request, response) => {
    response.send("POST Method called");
});

app.delete("/delete", (request, response) => {
    response.send("POST Method called");
});

app.listen(PORT, () => {
    console.log(`Server Started at port: ${PORT}`);
});

