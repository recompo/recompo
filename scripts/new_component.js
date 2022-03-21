#!/usr/bin/env node
const fs = require("fs");

const name = process.argv[0].match("node") ? process.argv[2] : process.argv[1];

const index = `export { default } from './${name}'`;

const component = `
import React, { FC } from 'react';
import styles from './${name}.module.css'


const ${name} = () => {
  return <div></div>
}

export default ${name}
`;
const dir = `src/components/${name}`;

fs.mkdirSync(`${dir}`);
fs.writeFileSync(`${dir}/${name}.tsx`, component);
fs.writeFileSync(`${dir}/index.ts`, index);
fs.writeFileSync(`${dir}/${name}.module.css`, "");
