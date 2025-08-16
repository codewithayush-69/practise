import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { error } from "console";
import express from "express";

const router = express.Router();

const DATA_FILE = path.join("data", "links.json");


const loadLink = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
  }
  throw error;
};

const saveLink = async (link) => {
  await writeFile(DATA_FILE, JSON.stringify(link));
};

router.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("view", "index.html"));
    const links = await loadLink();

    const content = file.toString().replaceAll(
      "{{shortnerurl}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url} </li>`
        )
        .join("")
    );
    return res.send(content);
  } catch (error) {
    res.redirect("/");
    return res.status(500).send(alert("Internal server error"));
  }
});

router.post("/", async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLink();

    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short code already exist please choose another");
    }

    links[finalShortCode] = url;
    await saveLink(links);

    res.redirect("/");
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
});

router.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLink();

    if (!links[shortCode])
      return res.status(404).send("An unkown error occurred");
    return res.redirect(links[shortCode]);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
});

export const shortnerRouter = router;