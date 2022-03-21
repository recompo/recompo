#!/usr/bin/env node
const fs = require("fs");
const name = name;

const index = `export { default } from './${name}'`;

const component = `
import React, { FC, PropsWithChildren } from 'react';
import styles from './${name}.module.css'


const $1 = () => {
  return <div></div>
}

export default ${name}
`;
const dir = `src/components/${name}`;

fs.mkdir(`${dir}`);
fs.writeFile(`${dir}/${name}.tsx`, component);
fs.writeFile(`${dir}/index.ts`, index);
fs.writeFile(`${dir}/${name}.module.css`, "");
