require.resolve('core-js');
require.resolve('@babel/runtime-corejs3/core-js/date/now');

module.exports = {
  presets: [
    require.resolve('@babel/preset-typescript'),
    [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
  ],

  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          i18n: './i18n.ts',
          assets: './assets',
          components: './components',
          constants: './constants',
          containers: './containers',
          content: './content',
          contracts: './contracts',
          hoc: './hoc',
          hooks: './hooks',
          lib: './lib',
          mutations: './mutations',
          queries: './queries',
          scripts: './scripts',
          sections: './sections',
          store: './store',
          styles: './styles',
          translations: './translations',
          typings: './typings',
          utils: './utils',
        },
      },
    ],
    [require.resolve('@babel/plugin-transform-runtime'), { corejs: 3 }],
  ],

  env: {
    production: {
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            useBuiltIns: 'usage',
            corejs: { version: 3, proposals: true },
            modules: false,
            targets: {
              browsers: require('./package.json').browserslist,
            },
          },
        ],
      ],
    },

    development: {
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            modules: false,
            targets: { browsers: ['last 1 Chrome version'] },
          },
        ],
      ],
      plugins: [require.resolve('react-refresh/babel')],
    },

    test: {
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            modules: 'commonjs',
            targets: { node: 'current' },
          },
        ],
      ],
    },
  },
};
