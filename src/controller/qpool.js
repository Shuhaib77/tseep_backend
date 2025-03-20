import {
  addQpoolService,
  getQpoolService,
  getQuesByIdService,
} from "../services/qpoolService.js";

export const addQpool = async (req, res) => {
  const { question, options, answer } = req.body;

  if (!question || !options || !answer) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const data = await addQpoolService(question, options, answer);
  if (!data) {
    return res.status(404).json({ message: "add qust failed" });
  }
  res.status(200).json({ message: "quastion added", data: data });
};

export const getQpool = async (req, res) => {
  const data = await getQpoolService();
  if (!data) {
    return res.status(404).json({ message: "fetch qustions failed" });
  }
  res.status(200).json({ message: "quastions fetched", data: data });
};

export const getQuesById = async (req, res) => {
  const {id} =req.params;
  console.log(id,"cd3");
  
  if (!id) {
    return res.status(404).json({ message: "id invalid" });
  }
  const data = await getQuesByIdService(id);
  if (!data) {
    return res.status(404).json({ message: "fetch qust failed" });
  }
  res.status(200).json({ message: "quastion fetched", data: data });
};
