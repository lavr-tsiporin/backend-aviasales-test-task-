import { Ticket } from "./ITicket";
import { folderImage, hostname, port } from "./config";

const data: Omit<Ticket, "logo">[] = [
  {
    price: 4015,
    carrier: "UTair",
    code: "UT",
    segments: {
      origin: "MOW",
      destination: "SGS",
      date: "2022-08-01",
      stops: ["HKG"],
      duration: (3 * 60 + 15) * 60 * 1000,
    },
  },
  {
    price: 5985,
    carrier: "Победа",
    code: "DP",
    segments: {
      origin: "MOW",
      destination: "SGC",
      date: "2022-08-01",
      stops: [],
      duration: (3 * 60 + 10) * 60 * 1000,
    },
  },
  {
    price: 6065,
    carrier: "Аэрофлот",
    code: "SU",
    segments: {
      origin: "MOW",
      destination: "SGC",
      date: "01.06.2022",
      stops: [],
      duration: (3 * 60 + 20) * 60 * 1000,
    },
  },
  {
    price: 12956,
    carrier: "S7 Airline",
    code: "S7",
    segments: {
      origin: "MOW",
      destination: "SGC",
      date: "2022-08-01",
      stops: ["TJM", "HMA"],
      duration: (19 * 60 + 55) * 60 * 1000,
    },
  },
  {
    price: 19857,
    carrier: "Red Wings",
    code: "WZ",
    segments: {
      origin: "MOW",
      destination: "SGC",
      date: "2022-08-01",
      stops: ["GOJ", "KUF", "OVB"],
      duration: (21 * 60 + 15) * 60 * 1000,
    },
  },
];

export const tickets: Ticket[] = data.map((ticket) => {
  const src = `http://${hostname}:${port}/${folderImage}/${ticket.code}_logo.png`;
  return Object.assign(ticket, { logo: src });
});
