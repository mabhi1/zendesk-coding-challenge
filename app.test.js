axios = require("axios");

test("Zendesk API returning total number of tickets", async () => {
  const { data } = await axios.get(
    "https://zccabhishek123.zendesk.com/api/v2/tickets/?per_page=1",
    {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    }
  );
  expect(data.count).toBe(101);
});

test("Zendesk API returning 25 tickets per page", async () => {
  const { data } = await axios.get(
    "https://zccabhishek123.zendesk.com/api/v2/tickets/?per_page=25",
    {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    }
  );
  expect(data.tickets.length).toBe(25);
});

test("Zendesk API returning json data", async () => {
  const { data } = await axios.get(
    "https://zccabhishek123.zendesk.com/api/v2/tickets/?per_page=1",
    {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    }
  );
  expect(typeof data).toBe("object");
});

test("Zendesk API returning individual ticket", async () => {
  const { data } = await axios.get(
    "https://zccabhishek123.zendesk.com/api/v2/tickets/1",
    {
      auth: {
        username: "amishr1@stevens.edu",
        password: "Abhishek@1995",
      },
    }
  );
  expect(data.ticket.id).toBe(1);
});

test("Zendesk API throwing error on wrong credentials", async () => {
  try {
    const { data } = await axios.get(
      "https://zccabhishek123.zendesk.com/api/v2/tickets/1",
      {
        auth: {
          username: "amishr@stevens.edu",
          password: "Abhishek@1995",
        },
      }
    );
  } catch (e) {
    expect(e.response.data.error).toBe("Couldn't authenticate you");
  }
});

test("Zendesk API throwing error on wrong api call", async () => {
  try {
    const { data } = await axios.get(
      "https://zccabhishk123.zendesk.com/api/v2/tickets/1",
      {
        auth: {
          username: "amishr1@stevens.edu",
          password: "Abhishek@1995",
        },
      }
    );
  } catch (e) {
    expect(e.response.data.error.title).toBe(
      "No help desk at zccabhishk123.zendesk.com"
    );
  }
});
