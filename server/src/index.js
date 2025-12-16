import express from "express";
import http from "http";

const app = express(); 
const server = http.createServer(app);
const PORT = 4000;


app.get("/api/health" , (req ,res) => {
    const id = req.query.id;

res.status(200).json({ message : "healthy server !!" , yourId : id });
});

app.get("/api/users" , (req ,res) => {
  const users = [
  { username: "varun joshi", email: "varun.joshi@gmail.com", age: 24 },
  { username: "rahul sharma", email: "rahul.sharma@gmail.com", age: 26 },
  { username: "ankit verma", email: "ankit.verma@gmail.com", age: 23 },
  { username: "priya singh", email: "priya.singh@gmail.com", age: 25 },
  { username: "neha gupta", email: "neha.gupta@gmail.com", age: 27 },
  { username: "rohit mehta", email: "rohit.mehta@gmail.com", age: 28 },
  { username: "pooja patel", email: "pooja.patel@gmail.com", age: 24 },
  { username: "amit kumar", email: "amit.kumar@gmail.com", age: 29 },
  { username: "sneha iyer", email: "sneha.iyer@gmail.com", age: 26 },
  { username: "arjun malhotra", email: "arjun.malhotra@gmail.com", age: 30 },
  { username: "kiran reddy", email: "kiran.reddy@gmail.com", age: 22 },
  { username: "deepak yadav", email: "deepak.yadav@gmail.com", age: 27 },
  { username: "mehul shah", email: "mehul.shah@gmail.com", age: 31 },
  { username: "ravi chandra", email: "ravi.chandra@gmail.com", age: 28 },
  { username: "ananya das", email: "ananya.das@gmail.com", age: 23 },
  { username: "vishal khanna", email: "vishal.khanna@gmail.com", age: 32 },
  { username: "nidhi agarwal", email: "nidhi.agarwal@gmail.com", age: 25 },
  { username: "saurabh mishra", email: "saurabh.mishra@gmail.com", age: 29 },
  { username: "komal arora", email: "komal.arora@gmail.com", age: 24 },
  { username: "manish pandey", email: "manish.pandey@gmail.com", age: 33 }
];

res.status(200).json({users});

})

server.listen(PORT , () => {
 console.log(`SERVER RUNNING ON PORT ${PORT}`);    
});
