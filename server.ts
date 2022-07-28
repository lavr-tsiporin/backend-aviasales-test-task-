import Fastify from "fastify";
import path from "path";
import { tickets } from "./data";
import { configServer } from "./config";

const { folderImage, hostname, port } = configServer;

const fastify = Fastify({
  logger: true,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
fastify.register(require("@fastify/cors"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, folderImage),
  prefix: `/${folderImage}/`,
});

const response = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return Math.random() > 0.3 ? res(tickets) : rej("no data");
    }, 3000);
  });
};

fastify.get("/api/tickets", async (request, reply) => {
  try {
    const data = await response();
    reply.send(JSON.stringify(data));
  } catch (error) {
    reply.status(500).send({ status: 500, message: error });
  }
});

fastify.listen({ port, host: hostname }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
