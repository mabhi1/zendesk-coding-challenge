const express = require("express");
const router = express.Router();
const axios = require("axios");
const url = "https://zccabhishek.zendesk.com/api/v2/tickets/";

router.get("/", async (req, res) => {
  const { data } = await axios.get(url, {
    auth: {
      username: "amishr1@stevens.edu",
      password: "Abhishek@1995",
    },
  });
  if (data.tickets) {
    res.render("index", {
      data: data.tickets,
    });
  }
});

module.exports = router;
