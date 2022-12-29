import express from "express";
import fs from "fs";
import cors from "cors";



const app = express();
const PORT = 9898;

app.use(express.json());
app.use(cors());

app.get("/todo", (req, res) => {
    fs.readFile("./tododata.json", (err, data) => {
        const parsedData = JSON.parse(data);
        res.json(parsedData);
    });
    // res.send("Hallo das ist ein Auto!");
});


app.post("/todo", (req, res) => {
    fs.readFile("./tododata.json", (err, data) => {
        const parsedData = JSON.parse(data);
        parsedData.push(req.body);
        if (Object.keys(req.body).length === 0) {
            console.log("FEHLER");
        } else {
            console.log("wird geadded");
            fs.writeFile("./tododata.json", JSON.stringify(parsedData, null, 2), () => {
                if (err) console.log(err);
            });
        }
        res.json(parsedData);
    });
});

app.put("/todo", (req, res) => {
    console.log(req.body);
    const newData = req.body;
    fs.writeFile("./tododata.json", JSON.stringify(newData, null, 2), (err) => {
        if (err) console.log(err);
    });
});
app.listen(PORT, () => { console.log("dat lüppt"); });