import { Project } from "ts-morph";

const project = new Project();

const source = project.addSourceFileAtPath("../../tina/__generated__/types.ts");

const aliases = source.getTypeAliases();

const post = aliases.find((alias) => alias.getName() === "Post");

console.log(post.getStructure());
