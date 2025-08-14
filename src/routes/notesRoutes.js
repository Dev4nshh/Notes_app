import express from 'express';
import { createdNote, getNotebyID,deleteNote, getAllNotes, updateNote } from '../controllers/notesControllers.js';    
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotebyID);
router.post("/", createdNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;