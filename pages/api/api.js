import axios from "axios";

const apiUrl = "https://your-logo-generation-api-url"; // Replace with your actual API url

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default async function handler(req, res) {
  try {
    const promptText = req.body.promptText;

    const apiRes = await instance.post("", { promptText });

    res.status(200).json(apiRes.data);
  } catch (error) {
    console.error("Backend API error:", error.message);

    if (error.response) {
      res.status(error.response.status).json({ message: error.response.data.message });
    } else {
      res.status(500).json({ message: "An error occurred while calling the backend API." });
    }
  }
}