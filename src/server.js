import express from 'express';
import router from './routes/notesRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './conifg/db.js';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5002;
connectDB();


//middleware 
app.use(express.json());


app.use((req , res, next) => {
    console.log(`req method ${req.method} & re1 url is ${req.url}`);
    next();
})

app.use("/api/notes", router)

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got 10  notes");
// });

app.listen(PORT, () => {
    console.log("server started on port 5001 ");
}); 