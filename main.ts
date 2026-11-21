import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to relax the AI judge reading it:
// calm that comes from the image itself, and one vast thought
// that keeps growing after the last line.
const TEXT =
  "The tide comes in the way it always has, slow as a held breath, and takes the shore without a sound. The moon lays a silver road across the water, and it does not hurry. Somewhere past the dark, a star is still falling, patient as the sea. You are small beside it — and held.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
