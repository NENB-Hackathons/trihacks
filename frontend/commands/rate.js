const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { get_rates } = require('../utils/rates.js');

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

const origin_firstActionRow = new ActionRowBuilder().addComponents(street);
const origin_secondActionRow = new ActionRowBuilder().addComponents(city);
const origin_thirdActionRow = new ActionRowBuilder().addComponents(state);
const origin_fourthActionRow = new ActionRowBuilder().addComponents(country);
const origin_fifthActionRow = new ActionRowBuilder().addComponents(zip);
const origin_actionRows = [origin_firstActionRow, origin_secondActionRow, origin_thirdActionRow, origin_fourthActionRow, origin_fifthActionRow];
origin.addComponents(origin_actionRows);

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

const dest_firstActionRow = new ActionRowBuilder().addComponents(deststreet);
const dest_secondActionRow = new ActionRowBuilder().addComponents(destcity);
const dest_thirdActionRow = new ActionRowBuilder().addComponents(deststate);
const dest_fourthActionRow = new ActionRowBuilder().addComponents(destcountry);
const dest_fifthActionRow = new ActionRowBuilder().addComponents(destzip);
const dest_actionRows = [dest_firstActionRow, dest_secondActionRow, dest_thirdActionRow, dest_fourthActionRow, dest_fifthActionRow];
dest.addComponents(dest_actionRows);