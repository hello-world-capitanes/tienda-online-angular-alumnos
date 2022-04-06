// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  firebase: {
    projectId: 'tienda-online-raulbravolopez',
    appId: '1:896831545580:web:f27f458537293bb37885c9',
    storageBucket: 'tienda-online-raulbravolopez.appspot.com',
    apiKey: 'AIzaSyBHBvSnuTDEwnfqjgf2o70kAiUW6KoqF7k',
    authDomain: 'tienda-online-raulbravolopez.firebaseapp.com',
    messagingSenderId: '896831545580',
  },
  apiUrl: "http://localhost:8000/api/v1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
