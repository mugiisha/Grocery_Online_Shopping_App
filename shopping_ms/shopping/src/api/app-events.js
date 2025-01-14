const ShoppingService = require("../services/shopping-service");

module.exports = (app) => {
  const service = new ShoppingService();

  app.use("/app-events", async (req, res) => {
    const payload = req.body;

    service.SubscribeEvents(payload);

    console.log(
      "=========== customer service received event ================="
    );
  });
};
