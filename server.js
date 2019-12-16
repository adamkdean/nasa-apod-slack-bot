//
// NASA Astronomy Picture of the Day slack bot
//

const axios = require('axios')
const CronJob = require('cron').CronJob
const { IncomingWebhook } = require('@slack/webhook')

// Config vars
const slackWebhook = process.env.SLACK_WEBHOOK || ''
const cronPattern = process.env.CRON_PATTERN || '0 12 * * *'
const cronTimeZone = process.env.CRON_TIMEZONE || 'Europe/London'
const nasaApiKey = process.env.NASA_API_KEY || ''
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`

// Initialise
const slack = new IncomingWebhook(slackWebhook)
const job = new CronJob(cronPattern, () => {
  axios.get(apiUrl).then(async (response) => {
    if (response && response.data && response.data.media_type == 'image') {
      let title = response.data.title
      let text = response.data.explanation
      let image_url = response.data.hdurl
      let footer = response.data.copyright || 'NASA Astronomy Picture of the Day'
      let obj = { attachments: [{ fallback: text, title, text, image_url, footer }] }
      await slack.send(obj)
    }
  })
  .catch(error => {
    console.log('error', error)
  })
}, null, true, cronTimeZone)
