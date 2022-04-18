import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcssPresetEnv from 'postcss-preset-env';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

const outputFolder = 'lib';
const artworksFolder = `__artworks/${pkg.name}`;
const outputBaseName = path.resolve(__dirname, outputFolder, `${pkg.name}`);
const artworksBaseName = path.resolve(__dirname, artworksFolder, `${pkg.name}`);
const isProduction = process.env.NODE_ENV === 'production';

const output = [

	{
		file: `${outputBaseName}.js`,
		format: 'umd',
		name: pkg.name,
	},
	{
		file: `${artworksBaseName}.js`,
		format: 'umd',
		name: pkg.name
	}	
];

if (isProduction) {

	output.push(

		{
			file: `${outputBaseName}.js`,
			format: 'umd',
			name: pkg.name,
			plugins: [
				terser()
			]
		}
	);

	output.push(

		{
			file: `${artworksBaseName}.js`,
			format: 'umd',
			name: pkg.name,
			plugins: [
				terser()
			]
		}
	);
}

export default [

	{
		input: `src/js/${pkg.name}.js`,

		output: output,

		plugins: [

			commonjs(),

            json(),

			postcss({
				inject: true,
				minimize: isProduction,
				plugins: [ postcssPresetEnv() ],
				writeDefinitions: true,
			}),

			sass({

				output: false,
				insert: true
			}),

			resolve()
		]
    }
];
