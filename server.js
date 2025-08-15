const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname)); // ให้ index.html เข้าถึงได้

app.post('/submit', (req, res) => {
    const { name } = req.body;
    console.log(`มีคนส่งชื่อมา: ${name}`); // แสดงใน console
    res.json({ message: `สวัสดี ${name} ข้อมูลของคุณถูกบันทึกแล้ว!` });
});

app.listen(3000, () => {
    console.log('Server เริ่มทำงานที่ http://localhost:3000');
});
