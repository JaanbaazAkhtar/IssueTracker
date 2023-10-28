const Projects = require("../models/Projects")

exports.create = async (req, res) => {
    try {
        const project = new Projects({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        });
        const result = await project.save(project);
        res.status(200).json({ sucess: true, data: result });
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.getAllProjects = async (req, res) => {
    try {
        const result = await Projects.find()
        res.status(200).json({ sucess: true, data: result });
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.getProjectById = async (req, res) => {
    try {
        const result = await Projects.findById({id: req.body.id});
        res.status(200).json({ sucess: true, data: result });
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}
