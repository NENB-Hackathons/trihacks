// Ship Command
//
// This command is used to ship a parcel from one address to another.
// When you call it it will ask you a series of questions in the channel you called it in.
// It will then send you a list of shipping options and ask you to select one.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');
const chalk = require('chalk')
const api_key = require('../config.json').shippo_api_key;
const axios = require('axios').default;

const { get_rates } = require('../utils/rates.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Ship a parcel from one address to another'),
    async execute(interaction) {
        // ask for origin address line 1
        await interaction.reply({ content: 'What is the origin address?', ephemeral: false });

        // wait for response
        const originAddressLine1 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address city
        await interaction.followUp({ content: 'What is the origin address city?', ephemeral: false });

        // wait for response
        const originAddressCity = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address state/province
        await interaction.followUp({ content: 'What is the origin address state/province?', ephemeral: false });

        // wait for response
        const originAddressState = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address country
        await interaction.followUp({ content: 'What is the origin address country?', ephemeral: false });

        // wait for response
        const originAddressCountry = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for origin address zip
        await interaction.followUp({ content: 'What is the origin address zip?', ephemeral: false });

        // wait for response
        const originAddressZip = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address line 1
        await interaction.followUp({ content: 'What is the destination address?', ephemeral: false });

        // wait for response
        const destinationAddressLine1 = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.editReply({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address city
        await interaction.followUp({ content: 'What is the destination address city?', ephemeral: false });

        // wait for response
        const destinationAddressCity = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address state/province
        await interaction.followUp({ content: 'What is the destination address state/Province?', ephemeral: false });

        // wait for response
        const destinationAddressState = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address country
        await interaction.followUp({ content: 'What is the destination address country?', ephemeral: false });

        // wait for response
        const destinationAddressCountry = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for destination address zip
        await interaction.followUp({ content: 'What is the destination address zip?', ephemeral: false });

        // wait for response
        const destinationAddressZip = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for weight
        await interaction.followUp({ content: 'What is the weight? (lbs)', ephemeral: false });

        // wait for response
        const weight = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for length

        await interaction.followUp({ content: 'What is the length (in)? ', ephemeral: false });

        // wait for response
        const length = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for width
        await interaction.followUp({ content: 'What is the width? (in)', ephemeral: false });

        // wait for response
        const width = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // ask for height
        await interaction.followUp({ content: 'What is the height? (in)', ephemeral: false });

        // wait for response
        const height = await interaction.channel.awaitMessages({ filter: m => m.author.id === interaction.user.id, max: 1, time: 60000, errors: ['time'] })
            .then(collected => collected.first().content)
            .catch(() => {
                interaction.followUP({ content: 'You took too long to respond. Please try again.', ephemeral: false });
            });

        // combine our address lines into an object that we can pass to the rates function
        const originAddress = {
            "street1": originAddressLine1,
            "city": originAddressCity,
            "state": originAddressState,
            "zip": originAddressZip,
            "country": originAddressCountry
        };

        // combine our address lines into an object that we can pass to the rates function
        const destinationAddress = {
            "street1": destinationAddressLine1,
            "city": destinationAddressCity,
            "state": destinationAddressState,
            "zip": destinationAddressZip,
            "country": destinationAddressCountry
        };

        // create our parcel object
        const parcel = {
            "weight": weight,
            "length": length,
            "width": width,
            "height": height,
            "distance_unit": "in",
            "mass_unit": "lb"
        };

        // create a new shipment with shippo api
        const rates = await axios.post('https://api.goshippo.com/shipments', {
            "address_from": originAddress,
            "address_to": destinationAddress,
            "parcels": [parcel],
            "async": false
        }, {
            headers: {
                'Authorization': `ShippoToken ${api_key}`
            }
        })
            .then(response => {
                return response.data;
            }
            )
            .catch(error => {
                console.log(error);
            }
            );

        // create our embed with embed builder
        const embed = new EmbedBuilder()
            .setTitle('Shipping Rates')
            .setDescription('Here are the shipping rates for your shipment. ')
            .addFields(
                { name: 'FedEx', value: '$' + rates.rates[0].amount, inline: true },
                { name: 'UPS', value: '$' + rates.rates[1].amount, inline: true },
                { name: 'USPS', value: '$' + rates.rates[2].amount, inline: true },
                { name: 'DHL', value: '$' + rates.rates[3].amount, inline: true },
                { name: 'Canada Post', value: '$' + rates.rates[4].amount, inline: true },
                
            )
            .setTimestamp();

        // send our embed
        await interaction.followUp({ embeds: [embed] });

    },
};
