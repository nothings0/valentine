const Valentine = require("../model/Valentine");
const slugify = require("slugify");
const CLIENT_URL = "http://localhost:3000";

const ValentineController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const randomString = generateRandomString(6);
      const slug = generateSlug(data.name, randomString).toLowerCase();
      const newValentine = new Valentine({ ...data, slug });
      await newValentine.save();

      return res.status(200).json({
        msg: "Tạo thành công",
        status: 200,
        link: CLIENT_URL + "/" + slug,
      });
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const { slug } = req.params;

      const valentines = await Valentine.findOne({ slug });

      return res.status(200).json({
        msg: "Tạo thành công",
        status: 200,
        data: valentines,
      });
    } catch (err) {
      next(err);
    }
  },
};
function generateSlug(name, randomString) {
  const combinedString = `${name}-${randomString}`; // Combine name and random string with a separator
  return slugify(combinedString); // Generate slug from combined string
}

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = ValentineController;
