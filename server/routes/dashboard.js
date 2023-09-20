const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/checkAuth");
const dashboardController = require("../controllers/dashboardController");


// Dashboard routes
router.get("/dashboard" , isLoggedIn, dashboardController.dashboard);
router.get("/dashboard/item/:id" , isLoggedIn, dashboardController.dashboardViewNote);
router.put("/dashboard/item/:id" , isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete("/dashboard/delete-item/:id" , isLoggedIn, dashboardController.dashboardDeleteNote);
router.get("/dashboard/add" , isLoggedIn, dashboardController.dashboardAddNotePage);
router.post("/dashboard/add" , isLoggedIn, dashboardController.dashboardAddNote);
router.get("/dashboard/search" , isLoggedIn, dashboardController.dashboardSearch);
router.post("/dashboard/search" , isLoggedIn, dashboardController.dashboardSearchSubmit);


module.exports = router ;
