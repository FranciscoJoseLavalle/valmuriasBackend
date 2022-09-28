import mongoose from "mongoose";

const collection = "Blogs";

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    thumbnail: String,
    reactions: Object,
    date: String
})

const blogsService = mongoose.model(collection, blogsSchema)

export default blogsService;