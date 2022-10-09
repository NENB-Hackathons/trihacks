const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
const chalk = require('chalk')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xkcd')
		.setDescription('Returns the requested xkcd comic')
		.addStringOption(option => 
			option.setName('number')
			.setDescription('The number of the comic to return')
			.setRequired(true)),
	async execute(interaction) {
		// get the number of the requested xkcd
		const number = interaction.options.getString('number');
		try {
			// request the xkcd api for the data of that number
			const response = await axios.get('https://xkcd.com/' + number + '/info.0.json')
			// build an embed using our data
			reply = new EmbedBuilder()
				.setTitle("XKCD - " + response["data"]["safe_title"])
				.setImage(response["data"]["img"])
				.setFooter({ text: "ALT: " + response["data"]["alt"]});
			// reply with the embed
			await interaction.reply({embeds: [reply["data"]]});
			// log the event to our terminal
			console.log(chalk.yellow.bold('[BOT/Command] Xkcd: ') + number + ' successfully sent.')
		} catch (error) {
			// something bad happened :(
			await interaction.reply('An error occurred while getting xkcd: ' + number);
			console.log(error)
		}
	},
};
