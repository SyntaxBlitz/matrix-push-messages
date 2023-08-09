require('dotenv').config();
const { MatrixClient } = require('matrix-bot-sdk');

const run = async () => {
  const client = new MatrixClient(
    process.env.HOMESERVER,
    process.env.MATRIX_BOT_ACCESS_TOKEN,
  );

  await client.start();

  const [ room ] = await client.getJoinedRooms();
  await client.sendHtmlText(room, process.argv[2]);

  process.exit(0);
};

run();
