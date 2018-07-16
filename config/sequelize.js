exports.default = {
  sequelize: (api) => {
    return {
      'autoMigrate': false,
      'loadFixtures': false,
      'dialect': 'postgres',
      logging: false,
      'port': parseInt(process.env.SEQUELIZE_PORT || 5432),
      'database': process.env.SEQUELIZE_DATABASE || 'trackbat-development',
      'host': process.env.SEQUELIZE_HOST,
      'username': process.env.SEQUELIZE_USER,
      'password': process.env.SEQUELIZE_PASSWORD
    }
  }
}

exports.development = exports.default.sequelize()
exports.production = exports.default.sequelize()

exports.test = {
  sequelize: (api) => {
    return {
      'autoMigrate': false,
      'loadFixtures': false,
      'database': 'trackbat-test',
      logging: false
    }
  }
}
