const { Router } = require('express');
const passport = require('passport')

const {
  attemptLogin,
  createCustomer,
  bulkCreateCustomers,
  getAllCustomers,
  getFilteredCustomers,
  updateCustomer,
  getCustomerById,
  deleteCustomerById,
} = require('../../controllers/customers');

const {
  createCustomerValidation,
  getCustomerByIdValidation,
  deleteCustomerByIdValidation,
} = require('../../middlewares/customers');

const router = Router();

router.post("/customers/bulk", bulkCreateCustomers);
router.post("/customers", createCustomerValidation, createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customers/filter", getFilteredCustomers);
router.get("/customers/:id", getCustomerByIdValidation, getCustomerById);
router.post("/customers/login", attemptLogin);
router.put("/customers", createCustomerValidation, updateCustomer);
router.delete("/customers/:id",deleteCustomerByIdValidation,deleteCustomerById);

//para google oauth20:
router.get("login/success", (req,res) => {
  if(req.user) {
    res.status(200).json({
      error:false,
      message: 'Succesfully Logged In',
      user:req.user
    })
  } else {
    res.status(403).json({
      error:true,
      message:"Not authorized"
    })
  }
})


router.get("login/failed", (req,res) => {
  res.status(401).json({
    error:true,
    message:"Log in failure"
  })
})

router.get(
  "google/callback",
  passport.authenticate("google",{
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
)

router.get("/google",passport.authenticate("google",["profile","email"]))
router.get("/logout",(req,res) => {
  res.logout()
  res.redirect(process.env.CLIENT_URL)
})
module.exports = router;
