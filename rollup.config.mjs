import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        resolveOnly: ['country-data', 'react-datepicker', 'react-phone-number-input', 'react-currency-input-field'],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      json(),
      copy({
        targets: [
          {
            src: 'node_modules/react-datepicker/dist/react-datepicker.css',
            dest: 'dist',
            rename: 'datepicker.css',
          },
        ],
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    tsconfig: './tsconfig.json',
    declaration: true,
    declarationDir: 'dist',
  },
];
