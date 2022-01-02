const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

program.version("0.0.1");

program
  .command("list-bugs")
  .description("List issues with bug label")
  .action(async () => {
    console.log("Before readRile...");

    const result = await fs.promises.readFile("./package.json");
    console.log("readFile result..", result);
    console.log("List bugs~!");
  });

program
  .command("check-prs")
  .description("Check pull request status")
  .action(() => {
    console.log("Check PRs~!");
  });

//program.parse();
program.parseAsync();
