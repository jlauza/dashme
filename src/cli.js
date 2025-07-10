#!/usr/bin/env node

const { resolve } = require("path");
const { create } = require("create-create-app");

const templateRoot = resolve(__dirname, "..", "templates");

const [, , rawArg] = process.argv;

create("dashme", {
  templateRoot,
  defaultTemplate: "default",
  promptForTemplate: false,
  skipPrompts: true,

  args: [rawArg],

  extra: {
    name: {
      type: "input",
      describe: "Project name",
      default: "my-app",
      prompt: "if-no-arg",
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
  after: ({ answers }) => {
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
