const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
const { Manager } = require("./models/Manager");
// Define associations here
Band.hasMany(Musician);
Musician.belongsTo(Band);

Band.belongsToMany(Song, { through: "band_song" });
Song.belongsToMany(Band, { through: "band_song" });

Band.hasOne(Manager);
Manager.belongsTo(Band);

module.exports = {
  Band,
  Musician,
  Song,
  Manager,
};
