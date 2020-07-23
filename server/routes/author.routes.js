const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/api/authors/", AuthorController.getAllAuthors);
    app.get("/api/author/:id", AuthorController.getOneAuthor);
    app.put("/api/author/update/:id", AuthorController.updateAuthor);
    app.post("/api/authors/new", AuthorController.createAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};