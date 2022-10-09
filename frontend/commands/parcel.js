const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { get_rates } = require('../utils/rates.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('parcel')
		.setDescription('Input Parcel Info (1/3)'),
	async execute(interaction) {
        await interaction.showModal(parcel);
	},
};

// Parcel Info
const parcel = new ModalBuilder()
	.setCustomId('parcel')
	.setTitle('Parcel Info');

const length = new TextInputBuilder()
	.setCustomId('length')
	.setLabel("Parcel Length (cm)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const width = new TextInputBuilder()
	.setCustomId('width')
	.setLabel("Parcel Width (cm)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const height = new TextInputBuilder()
	.setCustomId('height')
	.setLabel("Parcel Height (cm)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const weight = new TextInputBuilder()
	.setCustomId('weight')
	.setLabel("Parcel Weight (kg)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)

const firstActionRow = new ActionRowBuilder().addComponents(length);
const secondActionRow = new ActionRowBuilder().addComponents(width);
const thirdActionRow = new ActionRowBuilder().addComponents(height);
const fourthActionRow = new ActionRowBuilder().addComponents(weight);
const actionRows = [firstActionRow, secondActionRow, thirdActionRow, fourthActionRow];
parcel.addComponents(actionRows);