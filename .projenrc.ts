import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { NodePackageManager } from "projen/lib/javascript";
import { NextJsTypeScriptProject } from "projen/lib/web";

const project = new MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "pdk-static-website-sample",
  packageManager: NodePackageManager.PNPM,
  projenrcTs: true,
});
project.addGitIgnore(".idea");

const webapp = new NextJsTypeScriptProject({
  parent: project,
  name: "webapp",
  outdir: "packages/webapp",
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.PNPM,
  prettier: true,
  eslint: true,
  tailwind: false,
});
webapp.addGitIgnore("out");

project.synth();
