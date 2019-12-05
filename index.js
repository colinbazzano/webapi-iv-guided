const server = require("./api/server.js");

// on Heroku, process.env.PORT exists, but we are saying if not, use 4000.

const port = process.env.PORT || "4000";

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
