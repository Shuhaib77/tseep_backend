import Question from "../modals/quastions.js";



export const addQpoolService = async (question, options, answer) => {
  try {
    if (!question || !options || !answer) {
      throw new Error("all fields are required");
    }
    const checkq = await Question.findOne({ question: question });
    if (checkq) {
      throw new Error("quastion allredy exists");
    }

    const newQuestion =new Question({
      question,
      answer,
      options,
    });
    await newQuestion.save();
    return newQuestion;
  } catch (error) {
    throw new Error(error);
  }
};

export const getQpoolService = async () => {
  try {
    const questions =await Question.find().limit(5);
    if (questions.length === 0) {
        throw new Error("no questions available");
      }
    return questions;
  } catch (error) {
    throw new Error(error);
  }
};


export const getQuesByIdService = async (id) => {
    try {
        console.log(id,"PPPP");
        const question =await Question.findById(id)
        console.log(question);
      
      if (!question) {
          throw new Error("invalid question");
        }
      return question;
    } catch (error) {
      throw new Error(error);
    }
  };


