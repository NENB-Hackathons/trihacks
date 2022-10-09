const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { get_rates } = require('../utils/rates.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('destination')
		.setDescription('Input Destination Address Info (3/3)'),
	async execute(interaction) {
        await interaction.showModal(dest);
	},
};

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