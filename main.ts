import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Things, Two Lines — vending machine.
// The entry is a fixed two-line text: line 1 explains a vending machine
// to a 10-year-old through one concrete analogy (a robot shopkeeper);
// line 2 says honestly what that analogy maps and what it leaves out.
const ENTRY = [
  "A vending machine is a robot shopkeeper that never sleeps, dropping your snack down a little slide the moment you feed it coins.",
  "It maps the coins going in and the snack coming out on its own, but leaves out the person who fills it up and fixes it when it jams, and a real shopkeeper can smile, help you choose, and say thank you.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
