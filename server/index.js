const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const admin = require("firebase-admin");

const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}));
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);


if (!admin.apps.length) {
  const serviceAccount = require("./routes/omnicast-734c5-firebase-adminsdk-fbsvc-b3c6468371.json"); 
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
app.get("/api/userCount", async (req, res) => {
  try {
    const userList = await admin.auth().listUsers();
    res.json({ count: userList.users.length });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Error fetching user count" });
  }
});
mongoose
  .connect("mongodb://localhost:27017/omnicast", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});