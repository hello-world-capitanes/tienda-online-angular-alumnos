// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tienda-online-monica-rodriguez',
    appId: '1:1093954681602:web:b80b26c2da1b1d9bea601b',
    storageBucket: 'tienda-online-monica-rodriguez.appspot.com',
    apiKey: 'AIzaSyA9HPJMIWRv-CJYwQ90ay5MKLZ0PRBsiTg',
    authDomain: 'tienda-online-monica-rodriguez.firebaseapp.com',
    messagingSenderId: '1093954681602',
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
