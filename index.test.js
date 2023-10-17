const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    const band = await Band.create({
      name: "one direction",
      genre: "pop",
    });
    expect(band.name).toEqual("one direction");
    expect(band.genre).toEqual("pop");
  });

  test("can create a Musician", async () => {
    const musician = await Musician.create({
      name: "Harry",
      instrument: "guitar",
    });
    expect(musician.name).toEqual("Harry");
    expect(musician.instrument).toEqual("guitar");
  });

  test("can create a Song", async () => {
    const song = await Song.create({
      title: "Night changes",
      year: 2015,
      length: 4,
    });
    expect(song.title).toEqual("Night changes");
    expect(song.year).toEqual(2015);
    expect(song.length).toEqual(4);
  });

  test("can update a Band", async () => {
    const band = await Band.create({
      name: "two direction",
      genre: "rock",
    });
    const updatedBand = await band.update({
      name: "beetles",
      genre: "pop",
    });
    expect(updatedBand.name).not.toBe("two direction");
    expect(updatedBand.name).toBe("beetles");
  });

  test("can update a Musician", async () => {
    const musician = await Musician.create({
      name: "cody",
      instrument: "flute",
    });
    const updatedMusician = await musician.update({
      name: "rody",
    });
    expect(updatedMusician.name).not.toBe("cody");
    expect(updatedMusician.name).toBe("rody");
  });

  test("can update a Song", async () => {
    const song = await Song.create({
      title: "Day changes",
      year: 2020,
      length: 5,
    });
    const updatedSong = await song.update({
      title: "Stereo hearts",
    });
    expect(updatedSong.title).not.toBe("Day changes");
    expect(updatedSong.title).toBe("Stereo hearts");
  });

  test("can delete a Band", async () => {
    const band = await Band.findByPk(1);
    const deleted = await band.destroy();
    expect(band).toEqual(deleted);
  });

  test("can delete a Musician", async () => {
    const musician = await Musician.findByPk(1);
    const deleted = await musician.destroy();
    expect(musician).toEqual(deleted);
  });

  test("can delete a Song", async () => {
    const song = await Song.findByPk(1);
    const deleted = await song.destroy();
    expect(song).toEqual(deleted);
  });
});
