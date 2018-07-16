module.exports = function (sequelize, DataTypes, api) {
  const Track = sequelize.define('track', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    ip: DataTypes.STRING,
    method: DataTypes.STRING,
    host: DataTypes.STRING,
    referer: DataTypes.STRING,
    url: DataTypes.STRING,
    count: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    }
  })

  Track.prototype.apiData = function () {
    return {
      id: this.id,
      ip: this.ip,
      method: this.method,
      host: this.host,
      referer: this.referer,
      url: this.url,
      count: this.count
    }
  }

  return Track
}
