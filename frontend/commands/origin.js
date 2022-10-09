const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { get_rates } = require('../utils/rates.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('origin')
		.setDescription('Input Origin Address Info (2/3)'),
	async execute(interaction) {
        await interaction.showModal(origin);
	},
};

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