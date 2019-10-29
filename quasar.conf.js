// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'i18n',
      'axios'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnDropdown',
        'QIcon',

        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',

        'QAvatar',
       // 'QItemTile',

        'QTabs',
        'QTab',
        'QTabPanel',
        'QTabPanels',
        'QRouteTab',

        'QRouteTab',
        'QTabPanels',
        // 'QListHeader',
        'QFooter',
        'QSeparator',

        'QBtnGroup',
        'QMenu',

        'QCard',
        // 'QCardTitle',
        // 'QCardMain',
        // 'QCardMedia',
        'QSeparator',
        'QCardSection',
        'QCardActions',
        'QImg',
        
        'QTable',
        // pick only what you are using from:
        'QTh',
        'QTr',
        'QTd',
        'QSelect',

        // 'QSearch',

        'QDialog',

        'QExpansionItem',
        'QForm',
        'QInput',
        'QRadio',
        'QSelect',
        'QField',
        'QChip',
        'QScrollArea',
        'QTooltip',
        'QOptionGroup',
        'QToggle',
        'QFab',
        'QFabAction',
        'QPageSticky',

        'QPopupEdit',

        'QScrollArea',

        'QSpace',
        
        'QSlider',
        'QCheckbox'
      ],

      directives: [
        'Ripple',
        'ClosePopup',
        'AddressbarColor',
        'Meta'
      ],

      // Quasar plugins
      plugins: [
        'Notify'
      ]
    },

    supportIE: true,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
      }
    },

    devServer: {
      // https: true,
       port: 8081,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: 'all',

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'shamagri',
        // short_name: 'shamagri',
        // description: 'To make ERP app generally available',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'shamagri'
      }
    }
  }
}
