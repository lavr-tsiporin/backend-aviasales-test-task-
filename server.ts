import Fastify from "fastify";
import { tickets } from "./data";

const fastify = Fastify({
  logger: true,
});

const response = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return Math.random() > 0.3 ? res(tickets) : rej([]);
    }, 3000);
  });
};

fastify.get("/api/tickets", async (request, reply) => {
  const data = await response();
  reply.send(JSON.stringify(data));
});

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
