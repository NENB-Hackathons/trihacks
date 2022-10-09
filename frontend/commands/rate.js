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

// Origin Info
const origin = new ModalBuilder()
	.setCustomId('origin')
	.setTitle('Origin Info 2/3');

const street = new TextInputBuilder()
	.setCustomId('street')
	.setLabel("Street")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('69 Amogus Ave')
const city = new TextInputBuilder()
	.setCustomId('city')
	.setLabel("City")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('Dallas')
const state = new TextInputBuilder()
	.setCustomId('state')
	.setLabel("State/Province")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('Ohio')
const country = new TextInputBuilder()
	.setCustomId('country')
	.setLabel("Country (abbreviated)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('US')
const zip = new TextInputBuilder()
	.setCustomId('zip')
	.setLabel("Zip Code")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('92704')

const firstActionRow = new ActionRowBuilder().addComponents(street);
const secondActionRow = new ActionRowBuilder().addComponents(city);
const thirdActionRow = new ActionRowBuilder().addComponents(state);
const fourthActionRow = new ActionRowBuilder().addComponents(country);
const fifthActionRow = new ActionRowBuilder().addComponents(zip);
const actionRows = [firstActionRow, secondActionRow, thirdActionRow, fourthActionRow, fifthActionRow];
origin.addComponents(actionRows);

// Destination Info
const dest = new ModalBuilder()
	.setCustomId('dest')
	.setTitle('Destination Info 3/3');

const deststreet = new TextInputBuilder()
	.setCustomId('deststreet')
	.setLabel("Street")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('420 Bagutte St')
const destcity = new TextInputBuilder()
	.setCustomId('destcity')
	.setLabel("City")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('Chicago')
const deststate = new TextInputBuilder()
	.setCustomId('deststate')
	.setLabel("State/Province")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('Illinois')
const destcountry = new TextInputBuilder()
	.setCustomId('destcountry')
	.setLabel("Country (abbreviated)")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('UK')
const destzip = new TextInputBuilder()
	.setCustomId('zdestip')
	.setLabel("Postal Code")
	.setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setPlaceholder('50983')

const firstActionRow = new ActionRowBuilder().addComponents(deststreet);
const secondActionRow = new ActionRowBuilder().addComponents(destcity);
const thirdActionRow = new ActionRowBuilder().addComponents(deststate);
const fourthActionRow = new ActionRowBuilder().addComponents(destcountry);
const fifthActionRow = new ActionRowBuilder().addComponents(destzip);
const actionRows = [firstActionRow, secondActionRow, thirdActionRow, fourthActionRow, fifthActionRow];
origin.addComponents(actionRows);