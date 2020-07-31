import server from "./server";
import { connect } from "./models";

const { PORT: port = 4000 } = process.env;

const main = async (): Promise<void> => {
  await connect();
  await server.listen({ port });
  console.log(`Server listening at port ${port}...`);
};

main().catch(console.log);
