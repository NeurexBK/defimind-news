require("dotenv").config({
 path:".env.local"
})

async function sendPush(){

 await fetch("https://onesignal.com/api/v1/notifications",{

  method:"POST",

  headers:{

   "Content-Type":"application/json",

   Authorization:`Basic ${process.env.ONESIGNAL_API_KEY}`

  },

  body:JSON.stringify({

   app_id:process.env.ONESIGNAL_APP_ID,

   included_segments:["All"],

   headings:{
    en:"🚀 Breaking Crypto News"
   },

   contents:{
    en:"Nova notícia publicada na DefiMind"
   },

   url:"https://defimindnews.cloud"

  })

 })

 console.log("✅ Push Sent")

}

sendPush()
