const express = require("express");
const router = express.Router();
const axios = require("axios");
const url = "https://zccabhishek.zendesk.com/api/v2/tickets/";

router.get("/", async (req, res) => {
  let error = "";
  try {
    const { data } = await axios.get(url, {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    });
    if (data.ticket) {
      res.render("index", {
        data: data.tickets,
      });
    } else {
      throw { response: { data: { error: "No data found" } } };
    }
  } catch (e) {
    if (e.response.data.error.title) {
      error = e.response.data.error.title;
    } else {
      error = e.response.data.error;
    }
    res.status(500).render("error", {
      error: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  let error = "";
  try {
    const { data } = await axios.get(url + req.params.id, {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    });
    if (data.ticket) {
      res.render("ticket", {
        data: data.ticket,
      });
    } else {
      throw { response: { data: { error: "No data found" } } };
    }
  } catch (e) {
    if (e.response.data.error.title) {
      error = e.response.data.error.title;
    } else {
      error = e.response.data.error;
    }
    res.status(500).render("error", {
      error: error,
    });
  }
});

module.exports = router;
