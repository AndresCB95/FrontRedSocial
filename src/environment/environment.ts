// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false
  };

export const autenticacion_var = {
    url:"http://localhost",
    port:":3000",
    metodos:{
        logIn:"/api/logIn",
        registro:"/api/createNewUser"
    }
}

export const publicacion_var = {
    url:"http://localhost",
    port:":3001",
    metodos:{
        publicaciones:"/api/publicaciones",
        publicar:"/api/createPublish",
        update:"/api/update",
        delete:"/api/delete"
    }
}
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.