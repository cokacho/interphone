// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Answer} from "../app/core/models/common.model";

export const environment = {
  production: false
};

export const sectionsLocal = [
  {
    id: 5,
    slug: null,
    title: null,
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 1,
        text: 'Si',
        type: "success",
        next_section_id: 6
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'No',
        type: "error",
        next_section_id: 7
      })
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 6,
    slug: null,
    title: null,
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 1,
        text: 'Si',
        type: "success",
        next_section_id: 8
      }),
      Object.assign(new Answer(), {
        id: 1,
        text: 'No',
        type: "success",
        next_section_id: 8
      }),
      Object.assign(new Answer(), {
        id: 1,
        text: 'Talvéz',
        type: "success",
        next_section_id: 8
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'En otra ocación',
        type: "error",
        next_section_id: -1
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'Que sea rápido',
        type: "error",
        next_section_id: -1
      })
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 8,
    slug: null,
    title: null,
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Final',
        type: "error",
        next_section_id: -1
      })
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 7,
    slug: null,
    title: null,
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Final',
        type: "error",
        next_section_id: -1
      })
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

]


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
