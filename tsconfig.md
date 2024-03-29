# tsconfig.json

**表示目录，

*表示文件；



```json
{
    "include": [//指定哪些目录被编译，设置目录，而files设置文件
        "./src/**/*"
    ],
    "exclude": [//指定哪些目录不被编译。默认值：["node_modules","bower_components","jspm_"]
        "./src/test/**/*"
    ],
    "files":[//指定文件被编译
        "core.ts",
        "sys.ts",
        "index.ts"
    ],
    compilerOptions: {
        //注意：target设置为es5时，ES6的所有新特性都将会报错，同时需要设置lib: ["ES2015", "DOM"]
        "target": "es5", //指定编译后的js版本，可选值："es3","es5","es2015","es2016"...
        "module": "es2015", //指定TS的模块化规范，可选值："none","amd","commonjs","es2015"
        "lib": ["es6", "dom"], // 指定项目中药使用的库
        "outDir": "./dist", //输出文件目录
        "rootDir": "src", //TS源代码目录
        "outFile": "./dist/app.js", //将文件编译后输出到指定文件中
        "sourceMap": true, //开始源代码映射
        "allowJs": false, //是否对js文件进行编译，默认是：false
        "checkJs": false, //是否对js文件进行类型检查，默认值：false
        "removeCommoents": false, //是否移除注释，默认值：false
        "noEmit": false, //执行编译过程，而不生成编译后的js文件，默认值：false
        "noEmitOnError": false, //编译过程出错时，不生成编译后的js文件，默认值：false
        
        "strict":true, //所有严格检查的总开关
        "alwaysStrict": false, //是否编程成严格模式下的js文件，默认值：false
        "noImplicitAny": false, //TS中不允许隐式any类型，默认值：false
        "noImplicitThis": false, //TS中不允许不明确的this，比如函数中的this，默认值：false
        "strictNullChecks": true, //严格检查null值, 默认值：false
        
        
    }
}
```



```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "ES5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["ES2015", "DOM"],                       /* Specify library files to be included in the compilation. */
    // "allowJs": true,                             /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "sourceMap": true,                           /* Generates corresponding '.map' file. 源代码映射*/
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    "outDir": "./dist",                              /* Redirect output structure to the directory. 输出目录*/
    "rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. 源代码目录*/
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                                 /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                  /* Ensure overriding members in derived classes are marked with an 'override' modifier. */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    // "types": [],                                 /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}

```

