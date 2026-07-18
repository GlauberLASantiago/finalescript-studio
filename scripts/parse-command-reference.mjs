import fs from "node:fs";

const [source, destination] = process.argv.slice(2);
if (!source || !destination) {
  throw new Error("Uso: node parse-command-reference.mjs fonte.html destino.json");
}

const html = fs.readFileSync(source, "utf8");
const marker = /<a class="[^"]*dropDownHotspotFScommand[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
const found = [...html.matchAll(marker)];

const decode = (value = "") => value
  .replace(/<br\s*\/?\s*>/gi, "\n")
  .replace(/<[^>]+>/g, " ")
  .replace(/&gt;/g, ">")
  .replace(/&lt;/g, "<")
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&amp;/g, "&")
  .replace(/&nbsp;|&#160;/g, " ")
  .replace(/Ã/g, "×")
  .replace(/\r/g, "")
  .replace(/[ \t]+/g, " ")
  .replace(/ *\n */g, "\n")
  .trim();

const commands = found.map((match, index) => {
  const title = decode(match[1]).replace(/^(Closed|Open)\s*/i, "");
  const chunk = html.slice(match.index + match[0].length, found[index + 1]?.index ?? html.length);
  const description = decode(chunk.match(/<div class="MCDropDownBody[^>]*>\s*<p>([\s\S]*?)<\/p>/i)?.[1] ?? "");
  const section = (name) => decode(chunk.match(new RegExp(`<h4>${name}<\\/h4>\\s*<p>([\\s\\S]*?)<\\/p>`, "i"))?.[1] ?? "");
  const exampleBlock = chunk.match(/<h4>Examples<\/h4>\s*<p>([\s\S]*?)<\/p>/i)?.[1] ?? "";
  const examples = [...exampleBlock.matchAll(/<code>([\s\S]*?)<\/code>/gi)].map(x => decode(x[1])).filter(Boolean);
  return { title, description, synonyms: section("Synonyms"), parameters: section("Parameters"), examples };
}).filter(command => command.title);

fs.writeFileSync(destination, JSON.stringify(commands, null, 2) + "\n");
console.log(`Extraídos ${commands.length} comandos oficiais.`);
