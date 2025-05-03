import mongoose from "mongoose";

const schema = mongoose.Schema;
//schema
const favQuestionSchema = new schema({
  userId: {
    type: mongoose.Types.ObjectId,
  },
  question: {
    type: String,
    required: true,
  },
  options: {},
});

const favQuestion = mongoose.model("FavoriteQuestion", favQuestionSchema);

export default favQuestion;
