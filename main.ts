// One Line to Stop the Scroll — entry program.
//
// Writes a single line of text (1-200 chars, UTF-8, one line) to
// /output/entry.txt. Deterministic: the line is a fixed constant.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My cat just filed for custody of the sunny spot on the rug, and honestly, the judge is on her side.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
