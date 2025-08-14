import Note from "../models/Note.js";
export async function getAllNotes(_, res) {
    //     res.status(200).send("you got 20 notes")
    try {
        const notes = await Note.find().sort({createdAt : -1}); //-1 for newest first
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllnotes", error)
        res.status(500).json("Internal server error");
    }
}
export async function getNotebyID(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) res.status(500).json("note not found");
        res.json(note);
    } catch (error) {
        console.log("Error in getNotebyId", error)
        res.status(500).json("Internal server error");
    }
}
export async function createdNote(req, res) {
    // res.status(201).json("note created successfully");
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

       const savedNote =  await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error in createnotes", error)
        res.status(500).json("Internal server error");
    }
};
export async function updateNote(req, res) {
    // res.status(202).json("updates successfully");
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true 
        });

        if (!updatedNote) return res.status(404).json("note not found");
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log("Error in updatenote", error)
        res.status(500).json("Internal server error");
    }
}

export async function deleteNote(req, res) {
    try {
        //    const { title, content } = req.body;
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json("note not found");
        res.status(200).json("note deleted successfully");
    } catch (error) {
        console.log("Error in deletednote", error);
        res.status(500).json("Internal server error");
   }
}
