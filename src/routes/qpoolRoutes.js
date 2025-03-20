import express from "express";
import { addQpool, getQpool, getQuesById } from "../controller/qpool.js";
import tryCatch from "../middleware/tryCatch.js";
import { errorHndler } from "../middleware/globelError.js";

const qpoolRoute = express.Router();

qpoolRoute.post("/add/qpool", errorHndler, tryCatch(addQpool));
qpoolRoute.get("/qpool", errorHndler, tryCatch(getQpool));
qpoolRoute.get("/qpool/:id", errorHndler, tryCatch(getQuesById));

export default qpoolRoute;
