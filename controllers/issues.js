const Issues = require('../models/Issues');

exports.createIssue = async (req, res) => {
    try {
        console.log(req.body)
        const issue = new Issues({
            title: req.body.title,
            description: req.body.description,
            labels: req.body.label,
            author: req.body.author,
            status: req.body.status,
            project: req.body.project
        });
        const result = await issue.save(issue);
        res.redirect(`project?id=${req.body.project}`);
    } catch(error) {
        console.log('error in creating an issue ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.getAllIssuesForAProject = async (req, res) => {
    try {
        const projectId = req.query.id
        const issues = Issues.find({ where: { project: projectId }});
        res.redirect(`/product?id=${req.body.project}`);
    } catch(error) {
        console.log('error in getting issues ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.updateIssue = async (req, res) => {
    try {
        const uisue = await Issues.findByIdAndUpdate({id: req.body.id}, { status: req.body.status });
        res.redirect(`/product?id=${req.body.project}`);
    } catch(error) {
        console.log('error in updating issues ', error);
        res.status(400).json({ sucess: false, error: error });
    }
}

exports.deleteIssue = async (req, res) => {
    try {
        await Issues.findByIdAndDelete({id: req.query.id})
        res.redirect(`/product?id=${req.body.project}`);
    } catch(error) {
        console.log('Error in deleting issue ', error)
        res.status(400).json({ success: false, error: error })
    }
}

