// Front page for Thursday 26 November 2026.
//
// The finished image ships in this repository as entry.png; this program
// simply places an exact copy of it where the grader expects it.
// No network, no drawing at run time: the bytes out are the bytes in.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// Fail loudly (and identically on both runs) if the image is missing.
if (!statSync(source, { throwIfNoEntry: false })?.isFile()) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

copyFileSync(source, join(outDir, "entry.png"));
