const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const APP_URL = process.env.APP_URL
const JWT_SECRET = process.env.JWT_SECRET
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET
const COOKIE_SECRET = process.env.COOKIE_SECRET
const PASSWORD_RESET_SECRET = process.env.PASSWORD_RESET_SECRET
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const FACEBOOK = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callback: process.env.APP_URL + '/auth/facebook/callback'
}

const LINKEDIN = {
  consumerKey: process.env.LINKEDIN_APP_ID,
  consumerSecret: process.env.LINKEDIN_APP_SECRET,
  callback: process.env.APP_URL + '/auth/linkedin/callback'
}

const FORTYTWO = {
  clientID: process.env.FORTYTWO_APP_ID,
  clientSecret: process.env.FORTYTWO_APP_SECRET,
  callback: process.env.APP_URL + '/auth/fortytwo/callback'
}

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  CLOUDINARY_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  COOKIE_SECRET,
  FACEBOOK,
  LINKEDIN,
  FORTYTWO,
  APP_URL,
  PASSWORD_RESET_SECRET,
  SENDGRID_API_KEY
}
