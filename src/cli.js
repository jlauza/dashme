#!/usr/bin/env node

const { resolve } = require("path");
const { create } = require("create-create-app");

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
This is a caveat!
You can change this in \`src/cli.js\`.
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("dashme", {
  templateRoot,
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
      `📂 Don't forget to cd into your new project, run npm run dev and start coding.`
    );
  },
});
