import { createReadStream, createWriteStream, statSync } from "fs";
import path from "path";

const inputPath = path.join(import.meta.dirname, "input.json");
const outputPath = path.join(import.meta.dirname, "output.json");

const readableStream = createReadStream(inputPath, {
  encoding: "utf-8",
  highWaterMark: 16,
});

const writableStream = createWriteStream(outputPath);

let chunks = 0;

readableStream.on("data", (chunk)=>{
    chunks++;
    console.log("chunk: ", chunk);
    writableStream.write(chunk);
});

const stats = statSync(inputPath);


readableStream.on("end", ()=>{
    console.log("Completed");
    console.log(`File size: ${stats.size} bytes`);
    console.log(chunks);
});

readableStream.on("error", (err) => console.error(err));
writableStream.on("error", (err) => console.error(err));
