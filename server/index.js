const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");
const app = express();
const PORT = 6789;

const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

(async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb+srv://nilesh:Nilesh123@cluster0.unjz98h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();
