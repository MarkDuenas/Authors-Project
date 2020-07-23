const Author = require("../models/authors.model");

module.exports = {
    getAllAuthors : (req, res) => {
        Author.find({})
            .then(allAuthors => res.json({ message: "Success!", results: allAuthors }))
            .catch(err => res.status(400).json(err))
    },

    getOneAuthor : (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(oneAuthor => res.json({ message: "Success!", results: oneAuthor }))
            .catch(err => res.status(400).json(err))
    },

    createAuthor : (req, res) => {
        Author.create(req.body)
            .then(createdAuthor => res.json({ message: "Sucess!", results: createdAuthor }))
            .catch( err => res.status(400).json(err))
    },

    updateAuthor : (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(updatedAuthor => res.json({ message: "Sucess!", results: updatedAuthor }))
            .catch( err => res.status(400).json(err))
    },

    deleteAuthor : (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deletedAuthor => res.json({ message: "Success!", results: deletedAuthor}))
            .catch(err => res.status(400).json(err))
    }
};

