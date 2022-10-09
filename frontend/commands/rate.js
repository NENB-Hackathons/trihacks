const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { bot_version } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Version Info for your bot'),
	async execute(interaction) {
        await interaction.showModal(modal);
	},
};

// Create the modal
const modal = new ModalBuilder()
	.setCustomId('rateprompt')
	.setTitle('Calculate Parcel Rates');
// Add components to modal
// Create the text input components
const parcel = new TextInputBuilder()
	.setCustomId('parcel')
    // The label is the prompt the user sees for this input
	.setLabel("What's your favorite color?")
    // Short means only a single line of text
	.setStyle(TextInputStyle.Short);
    .setRequired(true);
const address_from = new TextInputBuilder()
	.setCustomId('hobbiesInput')
	.setLabel("What's some of your favorite hobbies?")
    // Paragraph means multiple lines of text.
	.setStyle(TextInputStyle.Paragraph);
const address_to = new TextInputBuilder()
	.setCustomId('hobbiesInput')
	.setLabel("What's some of your favorite hobbies?")
    // Paragraph means multiple lines of text.
	.setStyle(TextInputStyle.Paragraph);
// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
// Add inputs to the modal
modal.addComponents(firstActionRow, secondActionRow);
// Show the modal to the user
