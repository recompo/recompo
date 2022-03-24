#!/usr/bin/env node
const fs = require("fs")
const path = require("path")

const name = process.argv[0].match("node") ? process.argv[2] : process.argv[1]

const rootPath = path.join(__dirname, "../")

const index = `export { default } from './${name}'`
const component = `
import React, { FC } from 'react';
import styles from './${name}.module.css'


const ${name} = () => {
  return <div></div>
}

export default ${name}

`
const dir = `${rootPath}/src/components/${name}`


fs.mkdirSync(`${dir}`)
fs.writeFileSync(`${dir}/${name}.tsx`, component)
fs.writeFileSync(`${dir}/index.ts`, index)
fs.writeFileSync(`${dir}/${name}.module.css`, "")

const story = `
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import ${name} from "../components/${name}";
import { ${name} } from "../";

const Template: ComponentStory<typeof ${name}> = ({ children, ...args }) => (
  <${name} {...args}>{children}</${name}>
);

export default {
  title: "${name}",
  component: ${name}
} as ComponentMeta<typeof ${name}>;

export const Variant = Template.bind({});

Variant.args = {
};
<<<<<<< HEAD
`;
fs.writeFileSync(`./src/stories/${name}.stories.tsx`, story);
=======
`

fs.writeFileSync(`${rootPath}/src/stories/${name}.stories.tsx`, story)
fs.writeFileSync(
  `src/components/index.ts`,
  `export { default as ${name}} from "./${name}"`,
  { mode: "append" }
)
console.log(`Created component ${name}`)
>>>>>>> c3c7568263697fda31bf62ceabf5c47b9cf34cbd
