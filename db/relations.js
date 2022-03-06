import db from "./db";
require('./Models/Posts');

export const sync = async () => {
  try {
    await db.sync({ force: false }).then(() => {
      console.log('Connection has been established successfully.');
    })

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}