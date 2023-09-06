const passport = require('passport')

const loginSuccess = (req,res) => {
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
  }
  
const loginFailure = (req,res) => {
    res.status(401).json({
      error:true,
      message:"Log in failure"
    })
  }

const googleCallback = passport.authenticate("google",{
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })

const google = passport.authenticate("google",["profile","email"])

const logout = (req,res) => {
    res.logout()
    res.redirect(process.env.CLIENT_URL)
  }

module.exports = {loginSuccess,loginFailure,googleCallback,google, logout}