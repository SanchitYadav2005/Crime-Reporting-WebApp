//handling the home request

module.exports.homeController = (req, res) => {
  res.status(200).json({ message: "Working!!" });
};
