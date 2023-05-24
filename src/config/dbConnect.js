import mongoose from "mongoose";

mongoose.connect("mongodb://192.168.1.14:27017/aula", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;