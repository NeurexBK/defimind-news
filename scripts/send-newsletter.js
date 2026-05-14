require("dotenv").config({
 path:".env.local"
})

const { Resend } = require("resend")

const { createClient } =
require("@supabase/supabase-js")

const NewsletterEmail =
require("../emails/newsletter.js")

const resend = new Resend(
 process.env.RESEND_API_KEY
)

const supabase = createClient(

 process.env.NEXT_PUBLIC_SUPABASE_URL,

 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

)

async function sendNewsletter(){

 const { data, error } = await supabase

 .from("subscribers")

 .select("email")

 if(error){

  console.log(error)

  return

 }

 const emails = data.map(

  user => user.email

 )

 console.log(emails)

 const response =
 await resend.emails.send({

  from:"DefiMind <news@defimindnews.cloud>",

  to:emails,

  subject:"🚀 Breaking Crypto News",

  html:NewsletterEmail

 })

 console.log(response)

}

sendNewsletter()
