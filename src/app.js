import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogsService from './database/Blog.js';

const connection = mongoose.connect("mongodb+srv://francisco:valmurias@valmurias.zagzwoo.mongodb.net/?retryWrites=true&w=majority")

const app = express();
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`))
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {

    let result = await blogsService.find({});

    res.send(result)
})
app.post('/', async (req, res) => {

    await blogsService.create(req.body)

    res.send({ message: "Added succesfully" })
})
app.put('/', async (req, res) => {

    await blogsService.findOneAndUpdate({_id: req.body.id}, req.body)

    res.send({ message: "Updated succesfully" })
})
app.delete('/', async (req, res) => {

    await blogsService.deleteOne({_id: req.body.id})

    res.send({ message: "Deleted succesfully" })
})
