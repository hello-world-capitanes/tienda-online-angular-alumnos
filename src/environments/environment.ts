// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tienda-online-mario-querol',
    appId: '1:586173395703:web:6e88b9b94a6852ace3d9f2',
    storageBucket: 'tienda-online-mario-querol.appspot.com',
    apiKey: 'AIzaSyCd-CWlVXDPDpuYwApaqP0CgOoZbTeiGx8',
    authDomain: 'tienda-online-mario-querol.firebaseapp.com',
    messagingSenderId: '586173395703',
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
