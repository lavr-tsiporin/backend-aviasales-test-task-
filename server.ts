import Fastify from "fastify";
import { tickets } from "./data";

const fastify = Fastify({
  logger: true,
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
fastify.register(require("@fastify/cors"));

const response = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return Math.random() > 0.5 ? res(tickets) : rej("no data");
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

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
