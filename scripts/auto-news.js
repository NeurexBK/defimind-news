require("dotenv").config({
 path:".env.local"
})

const cron = require("node-cron")
const { exec } = require("child_process")

console.log("🚀 DefiMind Automation Started")

cron.schedule("*/15 * * * *",()=>{

 console.log("📰 Generating news...")

 exec("node scripts/generate-news.js")

 exec("node scripts/send-newsletter.js")

 exec("node scripts/push.js")

})
