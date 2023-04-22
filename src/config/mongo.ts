import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_CONNECT = <string>process.env.MONGO_DB;
  await connect(DB_CONNECT);
}

export default dbConnect;
