#!/usr/bin/env node

const { resolve } = require("path");
const { create } = require("create-create-app");

const templateRoot = resolve(__dirname, "..", "templates", "default");

const [, , rawArg] = process.argv;
const fallbackName = rawArg || "my-app";

const cond = process.argv;

if (cond.includes("--help") || cond.includes("-h")) {
  process.exit(0);
}

create("dashme", {
  templateRoot,
  defaultTemplate: ".",
  promptForTemplate: false,
  skipPrompts: true,
  skipGitInit: true,

  defaultName: rawArg,

  extra: {
    name: {
      type: "input",
      describe: "Project Name: ",
      default: fallbackName,
      prompt: rawArg ? false : "if-no-arg",
    },
    // auth: {
    //   type: "confirm",
    //   describe: "Enable Next-auth?",
    //   default: true,
    //   prompt: "if-no-arg",
    // },
    // language: {
    //   type: "list",
    //   choices: ["TypeScript", "JavaScript"],
    //   describe: "Choose your language",
    //   default: "TypeScript",
    //   prompt: "if-no-arg",
    // },
    // uilib: {
    //   type: "list",
    //   choices: ["Shadcn UI", "MUI", "Ant Design", "None"],
    //   describe: "Choose your UI library",
    //   default: "Shadcn UI",
    //   prompt: "if-no-arg",
    // },
    // database: {
    //   type: "list",
    //   choices: ["PostgreSQL", "SQLite", "MongoDB", "None"],
    //   describe: "Choose your database",
    //   default: "PostgreSQL",
    //   prompt: "if-no-arg",
    // },
  },
  after: ({ answers, name }) => {
    if (!answers.name) {
      answers.name = name || "my-app";
    }

    console.log("📦 Summary:");
    console.log(`- Project Name: ${answers.name}`);
    // console.log(`- Auth Enabled: ${answers.auth}`);
    // console.log(`- Language: ${answers.language}`);
    // console.log(`- UI Library: ${answers.uiLib}`);
    // console.log(`- Database: ${answers.database}`);
  },
  caveat: () => {
    console.log(
      `📂 Don't forget to \x1b[1mcd\x1b[0m into your project and run \x1b[1mnpm run dev\x1b[0m to get started.`
    );
  },
});
