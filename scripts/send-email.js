require("dotenv").config({
 path:".env.local"
})

const { Resend } = require("resend")

const NewsletterEmail =
require("../emails/newsletter.js")

const resend = new Resend(
 process.env.RESEND_API_KEY
)

async function sendEmail(){

const html = NewsletterEmail

 const response = await resend.emails.send({

from:"DefiMind <news@defimindnews.cloud>",
  to:"joaodiasbrandao8@gmail.com",

  subject:"🚀 Bitcoin dispara após nova onda institucional",

  html

 })

 console.log(response)

}

sendEmail()
