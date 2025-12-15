import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const PORT = 4000;


app.get("/api/health" , (req ,res) => {
res.status(200).json({ message : "healthy server !!" });
});

server.listen(PORT , () => {
 console.log(`SERVER RUNNING ON PORT ${PORT}`);    
});
