const Issues = require("../models/Issues");
const Projects = require("../models/Projects")

exports.create = async (req, res) => {
    try {
        const project = new Projects({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        });
        const result = await project.save(project);
        res.redirect("/");
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.getAllProjects = async (req, res) => {
    try {
        const result = await Projects.find()
        res.render('index.ejs', { title: 'Home Page', data: result })
        // res.status(200).json({ sucess: true, data: result });
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.getProjectById = async (req, res) => {
    try {
        // console.log('id ', req.query.id)
        const result = await Projects.findById({_id: req.query.id});
        let issues
        
        if(req.body.title || req.body.author || req.body.description || req.body.label) {
            issues = await Issues.find({project: req.query.id})
            if(req.body.author) {
                issues = issues.filter(r => r.author === req.body.author)
            }
            if(req.body.title) {
                issues = issues.filter(r => r.title === req.body.title)
            }
            if(req.body.description) {
                issues = issues.filter(r => r.description === req.body.description)
            }
            if(req.body.label) {
                issues = issues.filter(r => r.label === req.body.label)
            }
        } else {
            issues = await Issues.find({project: req.query.id})
        }
        
        // console.log('result ', issues)
        res.render('projects.ejs', { title:result.name, data:result, issues: issues })
        // res.send(200).json({ success: true, data: result })
    } catch(error) {
        console.log('error in creating a project ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}