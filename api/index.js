// api/index.js
const axios = require("axios");

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      status: "error",
      message: "Missing required query parameter: url",
      developer: "Pasindu 🇱🇰",
      telegram: "@Pasindu_21",
      channel: "https://t.me/sl_bjs"
    });
  }

  const apiUrl = `https://terabox-downloader-direct-download-link-generator2.p.rapidapi.com/url?url=${encodeURIComponent(url)}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "x-rapidapi-key": "53d70d5230msh356cfc37af9a0aap15bdb6jsn4dd186cb300d",
        "x-rapidapi-host": "terabox-downloader-direct-download-link-generator2.p.rapidapi.com"
      }
    });

    return res.status(200).json({
      status: "success",
      data: response.data,
      developer: "Pasindu 🇱🇰",
      telegram: "@Pasindu_21",
      channel: "https://t.me/sl_bjs"
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
      developer: "Pasindu 🇱🇰",
      telegram: "@Pasindu_21",
      channel: "https://t.me/sl_bjs"
    });
  }
};
