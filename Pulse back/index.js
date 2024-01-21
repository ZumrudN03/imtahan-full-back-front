import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
const { Schema } = mongoose;

const menuSchema = new Schema({
  title: String,
  detail: String,
  price: String,
  category: String,
});
const MenuModel = mongoose.model("Menu", menuSchema);

const app = express();
app.use(express.json());
app.use(cors());
const port = 3003;

app.get("/", async (req, res) => {
  try {
    const menu = await MenuModel.find({});
    res.send(menu);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuModel.findById(id);
    res.send(menu);
  } catch (error) {
    res.send(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const { title, detail, price, category } = req.body;
    const newMenu = new MenuModel({ title, detail, price, category });
    await newMenu.save();
    res.send("Got a POST request");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuModel.findByIdAndDelete(id);

    res.send("Got a DELETE request");
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect("mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(()=>console.log("Not Connected!"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
