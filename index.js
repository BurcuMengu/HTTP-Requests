import express from "express";
const app = express();
const port = 3000;

/* app.get("/", (req, res) => {
    console.log(req.rawHeaders); // temel olarak talebin geldiği yerden gelen anahtar/değer çiftlerinin listesinin verir terminalde
}); */

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>linkedin.com/in/burcu-mengü-180bb1103/</p>");
});

app.listen(port, () => {
    console.log(`Server strarted on port ${port}`);
});