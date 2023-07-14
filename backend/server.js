import express from "express";

const port = 5000;

const app = express();

app.get("/", (res, req) => res.send("Server is running"));

app.listen(port, () => console.log(`Sever is running on port ${port}`));
