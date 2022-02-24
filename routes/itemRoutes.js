module.exports = app => {

    const items = require("../controllers/toDoController.js");

    var router = require("express").Router();

    // Create a new to-do item
    router.post("/", items.create);

    // Retrieve all to-do items
    router.get("/", items.findAll);

    // Retrieve a single to-do item with id
    router.get("/:id", items.findOne);

    // Update a to-do item with id
    router.put("/:id", items.update);

    // Delete a to-do item with id
    router.delete("/:id", items.delete);

    //set route
    app.use('/api/items', router);
  };