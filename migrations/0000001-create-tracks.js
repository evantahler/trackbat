module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable('tracks', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      count: {
        defaultValue: 0,
        type: DataTypes.INTEGER
      },
      ip: DataTypes.STRING,
      method: DataTypes.STRING,
      host: DataTypes.STRING,
      url: DataTypes.STRING,
      referer: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    })

    await migration.addIndex('tracks', ['ip', 'method', 'host', 'url', 'referer'], {
      indexName: 'host_index',
      indicesType: 'UNIQUE'
    })
  },

  down: async function (migration, DataTypes) {
    await migration.dropTable('tracks')
  }
}
