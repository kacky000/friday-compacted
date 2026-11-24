import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line excuse: the deadline survived the whole task, right up to the moment
// the agent's context was compacted and its summary kept only the vaguest part.
const excuse =
  "Sorry, the deadline was in my context right up until compaction summarized it as \"user mentioned something about Friday.\"";

const limit = 160;
if ([...excuse].length > limit) throw new Error(`excuse is ${[...excuse].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), excuse);
