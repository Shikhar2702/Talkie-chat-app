const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  deleteUser,
} = require("../controllers/userControllers");

const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
