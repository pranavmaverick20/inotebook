const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser.js');
const Notes = require('../models/notes.js');
const { body, validationResult } = require('express-validator');

//route to get all notes

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes);
})

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters'),
], async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const savedNote = await Notes.create({ title, description, tag, user: req.user.id });
        res.status(200).json(savedNote);

    } catch (error) {
        res.status(500).json({ error: error });
    }

});

//route 3 to update

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }
    // if (id == req.user.id) {
    //     const updated = await Notes.findByIdAndUpdate(req.params.id, newNote);
    // }
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Not allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });

    } catch (error) {
        res.status(500).json(error);
    }

});

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Note not found");
    }
    if (note.user.toString() != req.user.id) {
        return res.status(401).send("Not allowed");
    }
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted");
    }
    catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;