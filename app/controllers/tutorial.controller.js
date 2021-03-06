const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// CREATE
exports.create = (req, res) => {

    // Validasi
    if(!req.body.title){
        res.status(400).send({
            message: "Kolom ini harus diisi!!"
        });
        return;
    }

    // Inisialisasi 
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        
    };

    // Simpan 
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
           res.status(500).send({
            message:
                err.message || "Beberapa kesalahan terjadi saat membuat Tutorial."
           }); 
        });
};

// GET ALL DATA
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: {[Op.like]: '%${title}%' } } : null;

    Tutorial.findAll({where: condition})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Beberapa kesalahan terjadi saat membuat Tutorial."
            });
        });
};

// FIND ONE DATA
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `Tidak ditemukan data dengan id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Kesalahan mengambil Tutorial dengan id="+id
            });
        });
};

// UPDATE
exports.update = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {
        where: { id: id }
    })

    .then(num => {
        if(num == 1){
            res.send({
                message: "Update data berhasil"
            });
        }else{
            res.send({
                message: `tidak bisa update dengan id=${id}.mungkin req.body is empty`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
           message: "update error dengan id="+id
        });
    });
};

// DELETE
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.destroy({
        where: { id: id }
    })

    .then(num => {
        if(num == 1){
            res.send({
                message: "Data berhasil dihapus!"
            });
        }else{
            res.send({
                message: `tidak bisa menghapus data dengan id=${id}.mungkin req.body is empty`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
           message: "delete error dengan id="+id
        });
    });
};

// DELETE ALL
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })

        .then(nums => {
            res.send({ message: `${nums} Data tutorial berhasil dihapus!!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ada error saat menghapus semua data"
            });
        });
};

// FIND ALL PUBLISHED
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
