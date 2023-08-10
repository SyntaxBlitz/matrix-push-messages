#!/usr/local/bin/node
require('dotenv').config({ path: `${__dirname}/.env` });
const { MatrixClient } = require('matrix-bot-sdk');

const run = async () => {
  const client = new MatrixClient(
    process.env.HOMESERVER,
    process.env.MATRIX_BOT_ACCESS_TOKEN,
  );

  await client.start();

  const [ room ] = await client.getJoinedRooms();
  await client.sendHtmlText(room, process.argv.slice(2).join(' '));

  process.exit(0);
};

run();
