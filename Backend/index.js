const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`🚀️ Server is running on  http://localhost:${PORT}`);}
);