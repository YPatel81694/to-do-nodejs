const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

//create new to-do item
exports.create = (req, res) => {
  if (!req.body.itemName) {
      console.log(req.body);
      res.status(400).send({
          message: "Incomplete to-do item."
      });
      return;
  }

  const newItem = {
    itemName: req.body.itemName,
    itemStatus: req.body.itemStatus ? req.body.itemStatus : false
  };

  Item.create(newItem)
   .then(data => {
       res.send(data);
   })
   .catch(err => {
       res.status(500).send({
           message: err.message || "Error occured while entering item."
       });
   });
};

//retrieve all to-do items
exports.findAll = (req, res) => {
    Item.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving to do items."
        });
    });
};

//retrieve one to-do item based on id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Item.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            }
            else {
                res.send({
                    message: "to-do item does not exist. please check id #"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting specific to do item with id: " + id
            });
        });
};

//update one to-do item based on id
exports.update = (req, res) => {
  const id = req.params.id;
  Item.update(req.body, {
      where: { id: id }
  })
    .then(row => {
        if (row == 1)
        {
            res.send({
                message: "To-Do Item was updated"
            })
        }
        else{
            res.send({
                message: "Either to-do item does not exist or update body is incomplete for id: " + id
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not update item with id: " + id
        });
    });
 };

//delete one to-do item based on id
exports.delete = (req, res) => {
  const id = req.params.id;
  Item.destroy({
      where: { id: id}
  })
  .then(row => {
      if (row == 1)
      {
          res.send({
              message: "item was deleted"
          });
      }
      else {
          res.send({
              messsage: "could not delete item with id: " + id
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message: "error deleting to do item"
      });
  });
};


