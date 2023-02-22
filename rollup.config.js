import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import typescr from "typescript";

export default {
  input: "dist/main.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
  format: "iife",
  plugins: [
    typescript({
      typescript: typescr,
    }),
    nodeResolve(),
    commonjs(),
  ],
};
