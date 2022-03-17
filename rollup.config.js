import swc from "rollup-plugin-swc3";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "cjs"
    },
    plugins: [
      resolve(),
      commonjs(),
      swc({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        tsconfig: "tsconfig.json",
        jsc: {
          parser: {
            syntax: "typescript"
          },
          target: "es5"
        }
      }),

      typescript({
        tsconfig: "./tsconfig.declaration.json"
      }),
      postcss()
    ]
  }
];
