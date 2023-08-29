import mongoose, { mongo }  from "mongoose";

mongoose.connect("mongodb+srv://brenopinto:mnJ8iPnn8Zz4o5Vj@nodeexpress.nkeyra2.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;