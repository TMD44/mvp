/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from '../../src/package.json';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

export default {
    // The stats option lets you precisely control what bundle information gets displayed.
    // 'errors-only' 'errors-warnings' 'minimal' 'none' 'normal' 'verbose' 'detailed' 'summary'
    stats: 'summary',

    externals: [...Object.keys(externals || {})],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, '../../src'),
        // https://github.com/webpack/webpack/issues/1114
        libraryTarget: 'commonjs2',
    },

    /**
     * Determine the array of extensions that should be used to resolve modules.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.join(__dirname, '../../src'), 'node_modules'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, '../../tsconfig.json'),
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            }),
        ],
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
        }),
        new webpack.ContextReplacementPlugin(/keyv/),
    ],
};
