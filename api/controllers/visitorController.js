const Visitor = require('../models/Museums');

//Post visitor
exports.create = (req, res) => {
    const visitor = new Visitor(req.body);
    visitor.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};

//Retrieve Visitors for Visitor Data Table
exports.findAll = (req, res) => {
    Visitor.find()
    .then(visitors => {
        res.json(visitors);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};

//Delete visitor

exports.delete = (req, res) => {
    Visitor.findByIdAndRemove(req.params.visitorId)
    .then(visitor => {
        if(!visitor) {
            return res.status(404).json({
                msg: "Visitor not found with id " + req.params.visitorId
            });
        }
        res.json({msg: "Visitor deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Visitor not found with id " + req.params.visitorId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete visitor with id " + req.params.visitorId
        });
    });
};