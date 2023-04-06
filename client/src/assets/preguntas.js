export const json = {
    "logoPosition": "right",
    "pages": [
        {
            "name": "page0",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel1",
                    "elements": [
                        {
                            "type": "html",
                            "name": "survey_intro",
                            "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Welcome              </h1>    <div class='intro__body wysiwyg'>       <p>In this section, you will be asked about your current personal details to help us create the perfect fitness and nutriton plan for you.</p>                </div> </article>"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "age",
                    "title": "Edad",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "weight",
                    "startWithNewLine": false,
                    "title": "Peso",
                    "isRequired": true

                },
                {
                    "type": "text",
                    "name": "height",
                    "startWithNewLine": false,
                    "title": "Altura",
                    "isRequired": true

                }
            ]
        },

        {
            "name": "page2",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel2",
                    "elements": [
                        {
                            "type": "checkbox",
                            "name": "activityLevel",
                            "title": "Nivel de actividad diaria en una escala del 1 al 5 (encuentre ejemplos a continuación, y si no está seguro, describa cómo es un día típico para usted y yo lo completaré):",
                            "isRequired": true,
                            "choices": [
                                "1- Trabaja en una oficina, muy poca actividad física.",
                                "2- Trabaja en una oficina, pero lleva mascota a pasear algunos días, o toma algunas escaleras.",
                                "3- Moderadamente activo, algo de ejercicio y algunas actividades físicas adicionales",
                                "4- Camarera a tiempo completo, enfermera, agente de bienes raíces y algo de ejercicio",
                                "5- Trabajo de alta intensidad como trabajador de construcción, o un atleta que hace ejercicio dos veces al día.",

                            ],
                            // "showNoneItem": true,
                            "noneText": "No symptoms"
                        },
                    ],


                },

            ],

        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel2",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "diabetes",
                            "title": "¿Sufre de alguna enfermedad, como diabetes?",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "no",
                                    "text": "No"
                                },
                                {
                                    "value": "yes",
                                    "text": "Yes"
                                }
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "comment",
                            "name": "diabetes_describe",
                            "visible": false,
                            "visibleIf": "{diabetes} = \"yes\"",
                            "startWithNewLine": false,
                            "title": "Describe",
                            "isRequired": true
                        },
                    ],


                },

            ],

        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel2",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "hormonalproblems",
                            "title": "¿Sufre de algún problema hormonal, como hipotiroidismo u otros problemas?",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "no",
                                    "text": "No"
                                },
                                {
                                    "value": "yes",
                                    "text": "Yes"
                                }
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "comment",
                            "name": "hormonalproblems_describe",
                            "visible": false,
                            "visibleIf": "{hormonalproblems} = \"yes\"",
                            "startWithNewLine": false,
                            "title": "Describe",
                            "isRequired": true
                        },
                    ],


                },

            ],
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel2",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "supplements",
                            "title": "¿Toma algún suplemento?",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "no",
                                    "text": "No"
                                },
                                {
                                    "value": "yes",
                                    "text": "Yes"
                                }
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "comment",
                            "name": "supplements_describe",
                            "visible": false,
                            "visibleIf": "{supplements} = \"yes\"",
                            "startWithNewLine": false,
                            "title": "Describe",
                            "isRequired": true
                        },
                    ],

                },

            ],

        },

        {
            "name": "page6",
            "elements": [
                {
                    "type": "panel",
                    "name": "panel2",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "prescription",
                            "title": "¿Toma algún medicamento recetado?",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "no",
                                    "text": "No"
                                },
                                {
                                    "value": "yes",
                                    "text": "Yes"
                                }
                            ],
                            "colCount": 0
                        },
                        {
                            "type": "comment",
                            "name": "prescription_describe",
                            "visible": false,
                            "visibleIf": "{prescription} = \"yes\"",
                            "startWithNewLine": false,
                            "title": "Si es así, cuáles y dosis:",
                            "isRequired": true
                        },
                    ],

                },

            ],

        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "comment",
                    "name": "calories",
                    "title": "¿Cuántas calorías consume al día? Si conoce sus macros, inclúyalos también.",
                    "isRequired": true
                },
                {
                    "type": "comment",
                    "name": "dietaryrestrictions",
                    "startWithNewLine": true,
                    "title": "Alergias alimentarias o restricciones dietéticas:",
                    "isRequired": true

                }
            ]
        },

        {
            "name": "page8",
            "elements": [
                {
                    "type": "comment",
                    "name": "goal",
                    "title": "Cuénteme sobre su objetivo específico, ¿qué le gustaría ver al final del plan? Menos grasa corporal, más definición muscular, bienestar general, corte, volumen, recomp, etc.",
                    "isRequired": true
                }

            ]
        },
        {
            "name": "page9",
            "elements": [
                {
                    "type": "html",
                    "name": "picturesintro",
                    "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Photos              </h1>    <div class='intro__body wysiwyg'>       <p>Fotografías frontal, lateral y posterior para que pueda evaluar su composición corporal actual. Se le solicitará que tome estas fotos semanalmente para nuestros registros, de modo que podamos usarlas como guía para ver si necesitamos hacer algún ajuste en la dieta y ver cambios.</p>                </div> </article>"
                },
                {
                    "type": "file",
                    "title": "Frontal",
                    "name": "files",
                    "storeDataAsText": false,
                    "allowMultiple": true,
                    "maxSize": 102400
                },
                {
                    "type": "file",
                    "title": "Lateral",
                    "name": "files",
                    "storeDataAsText": false,
                    "allowMultiple": true,
                    "maxSize": 102400
                },
                {
                    "type": "file",
                    "title": "Posterior",
                    "name": "files",
                    "storeDataAsText": false,
                    "allowMultiple": true,
                    "maxSize": 102400
                },

            ]
        },
    ],
    "showQuestionNumbers": "off",
    "storeOthersAsComment": false,
    "pagePrevText": "Previous",
    "pageNextText": "Continue",
    "completeText": "Finish",
    "requiredText": ""
}