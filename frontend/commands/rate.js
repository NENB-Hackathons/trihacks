const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Calculate shipping price for package, sorted by cheapest to most expensive'),
	async execute(interaction) {
        await interaction.showModal(parcel);
	},
};

// Parcel Info
const parcel = new ModalBuilder()
	.setCustomId('parcel')
	.setTitle('Parcel Info 1/3');

const length = new TextInputBuilder()
	.setCustomId('length')
	.setLabel("Parcel Length (CM)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const width = new TextInputBuilder()
	.setCustomId('width')
	.setLabel("Parcel Width (CM)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const height = new TextInputBuilder()
	.setCustomId('height')
	.setLabel("Parcel Height (CM)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
const weight = new TextInputBuilder()
	.setCustomId('weight')
	.setLabel("Parcel Weight (KG)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)

const firstActionRow = new ActionRowBuilder().addComponents(length);
const secondActionRow = new ActionRowBuilder().addComponents(width);
const thirdActionRow = new ActionRowBuilder().addComponents(height);
const fourthActionRow = new ActionRowBuilder().addComponents(weight);
const actionRows = [firstActionRow, secondActionRow, thirdActionRow, fourthActionRow];
parcel.addComponents(actionRows);