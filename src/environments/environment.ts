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
    title: "Saludo",
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
        id: 1,
        text: 'Como sabe mi número',
        type: "success",
        next_section_id: 10
      }),
      Object.assign(new Answer(), {
        id: 1,
        text: 'Estoy ocupado',
        type: "success",
        next_section_id: 8
      }),
      Object.assign(new Answer(), {
        id: 1,
        text: 'Tengo mi religión',
        type: "success",
        next_section_id: 12
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'No',
        type: "error",
        next_section_id: 7
      })
    ],
    content: "Buen día mi nombre es 'MI_NOMBRE', mi deseo es compartirle un pensamiento positivo de la biblia. ME LO PERMITE?"
  },
  {
    id: 6,
    slug: null,
    title: 'Explicación del tema',
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
        text: 'No sé',
        type: "success",
        next_section_id: 8
      }),
      Object.assign(new Answer(), {
        id: 1,
        text: 'No creo',
        type: "success",
        next_section_id: 13
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'Opinión personal',
        type: "error",
        next_section_id: 8
      })
    ],
    content: "En primera Predro 5:7 nos dice: `A la vez que echan sobre el (Dios) toda su inquietud, por que el se interesa por ustedes` aqui la biblia nos asegura, que Dios puede aliviar nuestras preocupaciones, una forma de hacerlo es gracias a la oración, ya que por medio de ella podemos desahogarnos con nuestro padre, USTED QUE OPINA?"
  },
  {
    id: 8,
    slug: null,
    title: "Compartir información",
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Despedida cordial',
        type: "error",
        next_section_id: 7
      })
    ],
    content: "Si a usted le interesa, le puedo enviar a este número, un link, con más información, relaciona sobre este tema"
  },
  {
    id: 7,
    slug: null,
    title: 'Despedida Cordial',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [

    ],
    content: "Ha sido un gusto poder conversar con usted, que tenga un buen día"
  },
  {
    id: 10,
    slug: null,
    title: 'Explicación de como tenemos su número',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Continuar',
        type: "error",
        next_section_id: 6
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'Quiero más informacion',
        type: "error",
        next_section_id: 11
      })
    ],
    content: "Por iniciativa propia, estoy llamando a números aleatorios para compartir un mensaje positivo"
  },
  {
    id: 11,
    slug: null,
    title: 'Terminar la conversacion',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
    ],
    content: "Gracias por su atención y su tiempo, adios"
  },
  {
    id: 12,
    slug: null,
    title: 'Tengo mi religión',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Si',
        type: "error",
        next_section_id: 6
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'No',
        type: "error",
        next_section_id: 11
      })

    ],
    content: "Que bueno que se interese por los asuntos espirtuales, y que los valore, justamente mi intención no es cambiarle de religión, solo compartir con usted un tema bíblico, ME LO PERMITE?"
  },
  {
    id: 13,
    slug: null,
    title: 'No creo en la biblia',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Si',
        type: "error",
        next_section_id: 14
      }),
      Object.assign(new Answer(), {
        id: 2,
        text: 'No',
        type: "error",
        next_section_id: 11
      })

    ],
    content: "Me permite preguntarle, por que piensa asi?"
  },
  {
    id: 14,
    slug: null,
    title: 'Experiencia propia',
    parent_id: 1,
    author: {id: 1, first_name: "Nelson", last_name: "Escudero"},
    answers: [
      Object.assign(new Answer(), {
        id: 2,
        text: 'Despedida cordial',
        type: "error",
        next_section_id: 7
      }),
    ],
    content: "Si usted desea, le puedo enviar un link acerca del por que yo estoy convencid@, del por que podemos creer y confiar en lo que dice la biblia"
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
