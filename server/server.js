const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // 提供静态文件服务

app.get("/api/images", (req, res) => {
  const imageFolder = path.join(__dirname, "public/images");
  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      res.status(500).send("Error reading files");
    } else {
      const imageData = files.map((file, index) => ({
        id: index + 1,
        title: path.parse(file).name,
        imageUrl: `/images/${file}`,
      }));
      res.json(imageData);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
