import express from "express";
import {
  addFavQuestion,
  showFavQuestion,
  removeFavQuestion,
} from "../controllers/favQuestion";

import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

//Post /favquestion
router.post("/", isAuthenticated, addFavQuestion);

//Get /favquestion
router.get("/", isAuthenticated, showFavQuestion);

//Post /favquestion:favQuestionId
router.delete("/:favQuestionId", isAuthenticated, removeFavQuestion);

export default router;
