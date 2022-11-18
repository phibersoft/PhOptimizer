import { colored } from "./colored";

process.on("uncaughtException", (err) => {
  console.log(colored(err.message, "error"));
});
