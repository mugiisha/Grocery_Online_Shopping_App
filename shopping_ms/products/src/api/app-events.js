module.exports = (app) => {

  app.use("/app-events", async (req, res) => {
    const payload = req.body;

    console.log(
      "=========== products service received event ================="
    );

    return res.status(200).json(payload)
  });
};
