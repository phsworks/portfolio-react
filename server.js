import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve statische bestanden uit de build-map
app.use(express.static(path.join(__dirname, "build")));

// Stuur alle verzoeken naar index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
