const cron = require("node-cron")

const { exec } = require("child_process")

cron.schedule("*/45 * * * *",()=>{

 console.log("🚀 Gerando notícia automática...")

 exec(

  "node scripts/generate-news.js",

  (err,stdout,stderr)=>{

   if(stdout){
    console.log(stdout)
   }

   if(err){
    console.log(err)
   }

   if(stderr){
    console.log(stderr)
   }

  }

 )

})

console.log("✅ Neurex AI automatizada online")
