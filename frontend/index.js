/*
Bot Name
---
Bot Description
Hic Svint Dracones.
*/

// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { bot_token, bot_version } = require('./config.json');

// Require other stuff hehe
const fs = require('node:fs');
const path = require('node:path');
const chalk = require('chalk')

// initial log
console.log(chalk.blue.bold('[BOT/init] ') + 'BOT started. Version %s', bot_version)

// Create a new client instance
const client = new Client({ intents: GatewayIntentBits.Guilds, });
console.log(chalk.blue.bold('[BOT/init] ') + 'Client instance created.')

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}
console.log(chalk.blue.bold('[BOT/init] ') + 'Commands loaded.')

// When the client is ready, run this code (only once)
client.once('ready', () => {
	// should have a function to sync all tables but eh
	console.log(chalk.green.bold('[BOT/Main] ') + 'Bot is now running. Press CTRL-C to exit.')
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	const { commandName } = interaction;

	if (!command) return;

	console.log(chalk.magenta.bold('[BOT/Command handler] ') + 'Recieved command ' + chalk.yellow('%s'), commandName)

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'parcel') {
		await interaction.reply({ content: 'Your submission was received successfully!' });
	}
});

// Login to Discord with your client's token
client.login(bot_token);
