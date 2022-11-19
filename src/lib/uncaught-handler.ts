import { colored } from "./colored";

process.on("uncaughtException", (err, reason) => {
  console.log(colored(err.message, "error"));
  console.log(colored(reason, "error"));
});
