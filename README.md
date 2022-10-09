# ZipShip

ZipShip was built in 46 hours for TriHacks. Our idea was to make a bot that tracks what the best shipping companies are. It's the fastest way to find the best shipping deals globaly. Using a python package, shippo, we are able to find three deals that might interest you for shipping. These three deals include fastest shipping, most balanced offer, and cheapest option. 

The theme of TriHacks this year was "supply chain". Our team is comprized of Alvarito050506, Bigjango, Encoded, Nobody6502, and Nooz. 

## Frontend
To run the bot, first populate `./frontend/config.json` with your discord bot:

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