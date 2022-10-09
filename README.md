# Trihacks

Trihacks, a 46 hour hacathon where we build a webside, app or bot to help with supply chain. Our team is comprized of Alvarito050506, Bigjango, Encoded, Nobody6502, and Nooz. Our idea is to make a bot that tracks what the best shipping companies are. We created Shipping Express, the fastest way to find the best shipping deals globaly. Using a python package, shippo, we are able to find three deals that might interest you for shipping. These three deals include fastest shipping, most balanced offer, and cheapest option. 

## Frontend
To run the bot, first populate `config.json` with your discord bot:

```
{
    "clientId": "CHANGEME",
	"guildId": "CHANGEME",
	"bot_token": "CHANGEME.CHANGEME.CHANGEME",
    "shippo_api_key": "CHANGEME"
	"bot_version": "Your Version String here",
	"local": true
}
```

Then install dependencies and start the bot:
```
yarn
yarn run deploy-commands
yarn run start
```
## Backend

To run the backend first ensure the config.json contains your shippo api key

Then install dependencies and start the flask server:
```
pip install -r requirements.txt
python backend.py
```