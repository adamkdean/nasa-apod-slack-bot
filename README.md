# nasa-apod-slack-bot

NASA Astronomy Picture of the Day slack bot

![Docker pulls](https://img.shields.io/docker/pulls/adamkdean/nasa-apod-slack-bot.svg)

## Docker

`docker run -d -e SLACK_WEBHOOK=x -e NASA_API_KEY=x adamkdean/nasa-apod-slack-bot`

## Environment variables

`SLACK_WEBHOOK` is your Slack incoming webhook URL.

`CRON_PATTERN` is the posting cron pattern (default `0 12 * * *`)

`CRON_TIMEZONE` is the posting cron timezone (default `Europe/London`)

`NASA_API_KEY` is your NASA API key, get one [here](https://api.nasa.gov/)
