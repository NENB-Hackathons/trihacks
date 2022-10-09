const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { bot_version } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Calculate shipping price for package, sorted by cheapest to most expensive'),
	async execute(interaction) {
        await interaction.showModal(parcel);
	},
};

client.on('interactionCreate', interaction => {
	if (!interaction.isModalSubmit()) return;

	// Get the data entered by the user
	const lengthresult = interaction.fields.getTextInputValue('length');
	const widthresult = interaction.fields.getTextInputValue('width');
	console.log({ lengthresult, widthresult });
});

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

//// Origin Info
//const origin = new ModalBuilder()
//	.setCustomId('origin')
//	.setTitle('Origin Info 2/3');
//
//const length = new TextInputBuilder()
//	.setCustomId('length')
//	.setLabel("Parcel Length")
//	.setStyle(TextInputStyle.Short)
//    .setRequired(true)
//const width = new TextInputBuilder()
//	.setCustomId('width')
//	.setLabel("Parcel Width")
//	.setStyle(TextInputStyle.Short)
//    .setRequired(true)
//const height = new TextInputBuilder()
//	.setCustomId('height')
//	.setLabel("Parcel Height")
//	.setStyle(TextInputStyle.Short)
//    .setRequired(true)
//const weight = new TextInputBuilder()
//	.setCustomId('weight')
//	.setLabel("Parcel Weight (LB)")
//	.setStyle(TextInputStyle.Short)
//    .setRequired(true)
//
//const firstActionRow = new ActionRowBuilder().addComponents(length);
//const secondActionRow = new ActionRowBuilder().addComponents(width);
//const thirdActionRow = new ActionRowBuilder().addComponents(height);
//const fourthActionRow = new ActionRowBuilder().addComponents(weight);
//const actionRows = [firstActionRow, secondActionRow, thirdActionRow, fourthActionRow];
//parcel.addComponents(actionRows);
//
//// Destination Info