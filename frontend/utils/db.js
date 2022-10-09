const Sequelize = require('sequelize');
const { local }  = require('../config.json');

if (local) { // local database connection 
	db = new Sequelize('database', 'username', 'password', {
		host: 'localhost',
		dialect: 'sqlite',
		logging: false,
		// SQLite only
		storage: 'database.sqlite',
	});
}
else { // remote database connection 
	db = new Sequelize('database', 'user', 'password', {
		host: 'localhost',
		dialect: 'sqlite',
		logging: false,
		// SQLite only
		storage: '/mnt/rsx_bot_db/database.sqlite',
	});
}

module.exports = db;