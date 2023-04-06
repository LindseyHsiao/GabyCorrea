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
                    "title": "Age",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "weight",
                    "startWithNewLine": false,
                    "title": "Weight",
                    "isRequired": true

                },
                {
                    "type": "text",
                    "name": "height",
                    "startWithNewLine": false,
                    "title": "Height",
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
                            "title": "Activity level daily on a scale from 1-5 (find examples below, and if you aren’t sure please describe what a typical day looks like for you and I’ll fill this in): ",
                            "isRequired": true,
                            "choices": [
                                "1- Work in an office, very little physical activity.",
                                "2- Work in an office, but take pet on walks some days, or take some stairs.",
                                "3- Moderately active, some exercise and some extra physical activities",
                                "4- Full time waitress, nurse, real estate agent plus some exercise ",
                                "5- High intensity job like construction worker, or an athlete who exercises twice a day.",

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
                            "title": "Do you suffer from any diseases, like diabetes?",
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
                            "title": "Do you suffer from any hormonal problems, like hypothyroidism or other issues?",
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
                            "title": "Do you take any supplements?",
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
                            "title": "Do you take any prescription medications?",
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
                            "title": "If so, which ones and dosage:",
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
                    "title": "How many calories do you eat a day? If you know your macros please include them too.",
                    "isRequired": true
                },
                {
                    "type": "comment",
                    "name": "dietaryrestrictions",
                    "startWithNewLine": true,
                    "title": "Food allergies or dietary restrictions:",
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
                    "title": "Tell me about your specific goal, what would you like to see by the end of the plan? Less body fat, more muscle definition, general well-being, cut, bulk, recomp, etc:",
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
                    "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Photos              </h1>    <div class='intro__body wysiwyg'>       <p>Please submit front, side and back pictures so I can evaluate your current body composition. You’ll be required to take these pictures weekly for our check ins so we can use them as a guide to see if we need to make any adjustments in the diet and see any changes.</p>                </div> </article>"
                },
                {
                    "type": "file",
                    "title": "Front",
                    "name": "files",
                    "storeDataAsText": false,
                    "allowMultiple": true,
                    "maxSize": 102400
                },
                {
                    "type": "file",
                    "title": "Side",
                    "name": "files",
                    "storeDataAsText": false,
                    "allowMultiple": true,
                    "maxSize": 102400
                },
                {
                    "type": "file",
                    "title": "Back",
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