# Your New Bot
Description go brr

## Running
- You will need a config.json. 
```
{
    "clientId": "CHANGEME",
	"guildId": "CHANGEME",
	"token": "CHANGEME.CHANGEME.CHANGEME",
	"bot_version": "Your Version String here",
	"local": true
}
```
- `yarn run deploy-commands`
- `yarn run start`

## Deploying to fly.io
Change local to false in `config.json`
- `flyctl auth login`
- `flyctl apps create`
- `fly volumes create [name]`
- `fly secrets set DATABASE_URL=sqlite3:///mnt/[name]/database.sqlite` 
- `flyctl deploy`
