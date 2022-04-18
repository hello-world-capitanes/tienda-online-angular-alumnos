// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tienda-online-adrian-martin',
    appId: '1:503607676642:web:dce07e04029427e1f218bb',
    storageBucket: 'tienda-online-adrian-martin.appspot.com',
    apiKey: 'AIzaSyAHdHZYaDWez89WVemWKahOvS7Mm5ghxe4',
    authDomain: 'tienda-online-adrian-martin.firebaseapp.com',
    messagingSenderId: '503607676642',
  },
  production: false,
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
