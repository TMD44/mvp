# Custom changes in .dev folder

## Folder rename

1. Folder rename:
    - from: `.erb`
    - to: `.dev`

---

## Configs

This folder contains the Webpack config files, for development and production builds.

### .eslintrc

### webpack.config.base.js

1. TsconfigPathsPlugin added

    - ```javascript
        const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, '../../tsconfig.json'),
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            }),
        ],
      ```

2. Line added to get rid of warning by 'keyv'

    - `new webpack.ContextReplacementPlugin(/keyv/),`

3. Line added for information displaying on Webpack build

    - ```javascript
        // The stats option lets you precisely control what bundle information gets displayed.
        // 'errors-only' 'errors-warnings' 'minimal' 'none' 'normal' 'verbose' 'detailed' 'summary'
        stats: 'summary',
      ```

### webpack.config.eslint.js

### webpack.config.main.prod.babel.js

1. Line modified

    - from: `entry: './src/main.dev.ts',`
    - to: `entry: './src/main/main.dev.ts',`

2. Line modified
    - from: `filename: './src/main.prod.js',`
    - to: `filename: './src/main/main.prod.js',`

### webpack.config.renderer.dev.babel.js

1. Line modified
    - from: `require.resolve('../../src/index.tsx'),`
    - to: `require.resolve('../../src/app/index.tsx'),`

### webpack.config.renderer.dev.dll.babel.js

### webpack.config.renderer.prod.babel.js

1. Line modified

    - from: `path.join(__dirname, '../../src/index.tsx'),`
    - to: `path.join(__dirname, '../../src/app/index.tsx'),`

2. Line modified
    - from: `test: /.s?css$/,`
    - to: `test: /.s?(c|a)ss$/,`

---

## Mocks

### fileMock.js

---

## Scripts

This folder contains scripts that handles functionality that cannot be written as npm scripts.

### .eslintrc

### BabelRegister.js

### CheckBuildsExist.js

1. Line modified
    - from: `const mainPath = path.join(__dirname, '../../src/main.prod.js');`
    - to: `const mainPath = path.join(__dirname, '../../src/main/main.prod.js');`

### CheckNativeDep.js

### CheckNodeEnv.js

### CheckPortInUse.js

### DeleteSourceMaps.js

1. Line added: `rimraf.sync(path.join(__dirname, '../../src/main/*.js.map'));`

### ElectronRebuild.js

### Notarize.js
