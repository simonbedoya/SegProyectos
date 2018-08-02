// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ELEMENT_DATA: [
    { code: '12345', name: 'Proyecto 1', typeProject: 'vivienda', dateInit: new Date(), dateEnd: new Date(), options: '', activities: [
      {name: 'Actividad 1', description: 'Descripcion', observation: '', dateRegister: new Date(), state: true, time: 30},
      {name: 'Actividad 2', description: 'Descripcion', observation: '', dateRegister: new Date(), state: true, time: 30},
      {name: 'Actividad 3', description: 'Descripcion', observation: '', dateRegister: new Date(), state: true, time: 30},
      {name: 'Actividad 4', description: 'Descripcion', observation: '', dateRegister: new Date(), state: true, time: 30}
    ]},
    { code: '54321', name: 'Proyecto 2', typeProject: 'agricola', dateInit: new Date(), dateEnd: new Date(), options: '', activities: [
      {name: 'Actividad proyecto 2', description: 'Descripcion', observation: '', dateRegister: new Date(), state: true, time: 30}
    ]}
  ]
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
