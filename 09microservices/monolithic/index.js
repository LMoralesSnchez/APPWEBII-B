const server = require("./src/app");
server.listen(process.env.PORT, () => {
  console.log(`Monolithic server listening on port ${process.env.PORT}`);
});
