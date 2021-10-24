import mongoose from "mongoose";
import config from "config";
import log from "../logger";
import { ConnectedMessage } from "../common/message";

function connect() {
  const dbUri = config.get("dbUri") as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info(ConnectedMessage.databaseConnected);
    })
    .catch((error) => {
      log.error(ConnectedMessage.connectError, error);
      process.exit(1);
    });
}

export default connect;
