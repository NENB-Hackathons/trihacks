const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { bot_version } = require('../config.json');

const reply = new EmbedBuilder()
	.setTitle("Bot Name")
	.addFields({ name: 'Version', value: bot_version, inline: true })
	.setDescription(`Bot Description`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Version Info for your bot'),
	async execute(interaction) {
		await interaction.reply({embeds: [reply["data"]]});
	},
};
