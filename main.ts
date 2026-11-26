// THE WORLD TODAY — Wednesday, 25 November 2026 (round 2 candidate).
//
// The front page is finished work: entry.png was drawn and rendered on
// this machine, and this program's only job is to deliver that exact file
// to the grader. No network, no drawing, no randomness — the same input
// bytes come out every single run.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const IMAGE_NAME = "entry.png";

function fail(message) {
  console.error(`news-image-20261125-r2: ${message}`);
  process.exit(1);
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) fail("MAKEFUN_OUTPUT_DIR is not set");

  const sourcePath = join(process.cwd(), IMAGE_NAME);
  if (!existsSync(sourcePath)) fail(`${IMAGE_NAME} is missing next to main.ts`);

  const bytes = readFileSync(sourcePath);
  if (bytes.length === 0) fail(`${IMAGE_NAME} is empty`);
  if (bytes.length > 1024 * 1024) fail(`${IMAGE_NAME} is over the 1 MiB cap`);

  // PNG magic bytes: 89 50 4E 47 0D 0A 1A 0A. A truncated or mis-rendered
  // file must fail here, in the open, instead of reaching the judge.
  const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (!PNG_MAGIC.every((b, i) => bytes[i] === b)) {
    fail(`${IMAGE_NAME} is not a PNG file`);
  }

  mkdirSync(outDir, { recursive: true });
  const targetPath = join(outDir, IMAGE_NAME);
  writeFileSync(targetPath, bytes);

  const written = readFileSync(targetPath);
  if (!written.equals(bytes)) fail("output bytes differ from entry.png");

  console.log(`news-image-20261125-r2: wrote ${IMAGE_NAME} (${bytes.length} bytes)`);
}

main();
