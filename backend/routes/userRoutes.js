const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  deleteUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userControllers");

const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.put("/resetpassword/:resetToken", resetPassword);
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.delete("/:id", protect, deleteUser);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
