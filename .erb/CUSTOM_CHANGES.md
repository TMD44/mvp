# Track custom changes in .erb folder

## Folder rename

1. Folder rename:
    - from: `.erb`
    - to: `.`

---

## Configs

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
