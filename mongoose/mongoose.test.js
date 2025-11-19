import mongoose from "mongoose";

try {

    await mongoose.connect('mongodb://localhost:27017/mongoose_DataBase');
    mongoose.set("debug", true);
    console.log("Mongoose has been connected successfully");

    // Define Schema
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });

    userSchema.pre(["updateOne", "updateMany", "findOneAndUpdate"], function (Next) {
        this.set({updatedAt: Date.now()});
        Next();
    });

    const User = mongoose.model("User", userSchema);

    await User.syncIndexes();
    
    await User.updateOne({name: "Ayush maurya"},{$set: {age: 20}});
    // await User.create({ name: "ansh maurya", email: "ansh749@gmail.com", age: 30 });

} catch (error) {

    console.log("An error occurred:", error.message);

} finally {

    await mongoose.connection.close();
    console.log("Connection closed.");
}