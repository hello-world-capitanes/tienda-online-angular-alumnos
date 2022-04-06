// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tienda-online-osman-mehmed',
    appId: '1:498608388577:web:257a6f7ac86049d3673aa0',
    storageBucket: 'tienda-online-osman-mehmed.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyB5MGSUJgwPJwJyn-fmyhV2x5RDBy_6lJY',
    authDomain: 'tienda-online-osman-mehmed.firebaseapp.com',
    messagingSenderId: '498608388577',
    measurementId: 'G-GNSLY0EXLY',
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
