import React, { useEffect, useState } from 'react'

export default function GabbyFoodCalculator() {
    const [subList, setSubList] = useState([])
    // create the array of objects for the data
    var carbs = [
        {
            item: 'Rice(Cooked)',
            weight: 100,
            carbs: 28,
            fat: 0.3,
            protein: 2.7,
            calories: 130,
        },
        {
            item: 'White Potato',
            weight: 100,
            carbs: 22.3,
            fat: 0.1,
            protein: 2.1,
            calories: 87,
        },
        {
            item: 'Sweet Potato',
            weight: 100,
            carbs: 20,
            fat: 0.1,
            protein: 1.6,
            calories: 86,
        },
        {
            item: 'Criolla Potato',
            weight: 100,
            carbs: 19,
            fat: 0,
            protein: 3,
            calories: 90,
        },
        {
            item: 'Yuca',
            weight: 100,
            carbs: 26.8,
            fat: 0.4,
            protein: 3.1,
            calories: 120,
        },
        {
            item: 'Plantain',
            weight: 100,
            carbs: 32,
            fat: 0.4,
            protein: 1.3,
            calories: 122,
        },
        {
            item: 'Quinoa',
            weight: 100,
            carbs: 21.1,
            fat: 2.2,
            protein: 4.3,
            calories: 120,
        },
        {
            item: 'Lentils',
            weight: 100,
            carbs: 12.2,
            fat: 0.4,
            protein: 9,
            calories: 88,
        },
        {
            item: 'Black Beans (Cooked)',
            weight: 100,
            carbs: 15,
            fat: 0.5,
            protein: 8.9,
            calories: 100,
        },
        {
            item: 'Chickpeas (Cooked)',
            weight: 100,
            carbs: 27.4,
            fat: 2.6,
            protein: 8.9,
            calories: 100,
        },
        {
            item: 'Strawberries',
            weight: 100,
            carbs: 7.7,
            fat: 0.3,
            protein: 0.7,
            calories: 32,
        },
        {
            item: 'Bluberries',
            weight: 100,
            carbs: 14.5,
            fat: 0.3,
            protein: 0.7,
            calories: 57,
        },
        {
            item: 'Blackberries',
            weight: 100,
            carbs: 9.6,
            fat: 0.5,
            protein: 1.4,
            calories: 43,
        },
        {
            item: 'Raspberries',
            weight: 100,
            carbs: 11.9,
            fat: 0.6,
            protein: 1.2,
            calories: 52,
        },
        {
            item: 'Banana',
            weight: 100,
            carbs: 22.8,
            fat: 0.3,
            protein: 1.1,
            calories: 89,
        },
        {
            item: 'Papaya',
            weight: 100,
            carbs: 9.8,
            fat: 0,
            protein: 0.1,
            calories: 39,
        },
        {
            item: 'Watermelon',
            weight: 100,
            carbs: 7.6,
            fat: 0.2,
            protein: 0.6,
            calories: 30,
        },
        {
            item: 'Kiwi',
            weight: 100,
            carbs: 15,
            fat: 0.5,
            protein: 1.1,
            calories: 61,
        },
        {
            item: 'Mango',
            weight: 100,
            carbs: 15,
            fat: 0.4,
            protein: 0.8,
            calories: 60,
        },
        {
            item: 'Pineapple',
            weight: 100,
            carbs: 13.1,
            fat: 0.1,
            protein: 0.5,
            calories: 50,
        },
        {
            item: 'Tangerine',
            weight: 100,
            carbs: 13.3,
            fat: 0.3,
            protein: 0.8,
            calories: 53,
        },
        {
            item: 'Orange',
            weight: 100,
            carbs: 11.8,
            fat: 0.1,
            protein: 0.9,
            calories: 47,
        },
        {
            item: 'Honeydew',
            weight: 100,
            carbs: 9,
            fat: 0.1,
            protein: 0.5,
            calories: 36,
        },
        {
            item: 'Grapes',
            weight: 100,
            carbs: 17.1,
            fat: 0.3,
            protein: 0.6,
            calories: 67,
        },
        {
            item: 'Pear',
            weight: 100,
            carbs: 15.2,
            fat: 0.1,
            protein: 0.4,
            calories: 57,
        },
        {
            item: 'Red Apple',
            weight: 100,
            carbs: 14.1,
            fat: 0.2,
            protein: 0.3,
            calories: 59,
        },
        {
            item: 'Green Apple',
            weight: 100,
            carbs: 13.6,
            fat: 0.2,
            protein: 0.4,
            calories: 58,
        },
        {
            item: 'Peach',
            weight: 100,
            carbs: 10.1,
            fat: 0.3,
            protein: 0.9,
            calories: 42,
        },
        {
            item: 'Pomegranate',
            weight: 100,
            carbs: 18.7,
            fat: 1.2,
            protein: 1.7,
            calories: 83,
        },
        {
            item: 'Figs',
            weight: 100,
            carbs: 19.2,
            fat: 0.3,
            protein: 0.8,
            calories: 74,
        },
        {
            item: 'Carrot',
            weight: 100,
            carbs: 9.6,
            fat: 0.2,
            protein: 0.9,
            calories: 41,
        },
        {
            item: 'Pumpkin',
            weight: 100,
            carbs: 6.5,
            fat: 0.1,
            protein: 1,
            calories: 26,
        },
        {
            item: 'Zucchini',
            weight: 100,
            carbs: 3.1,
            fat: 0.3,
            protein: 1.2,
            calories: 17,
        },
        {
            item: 'Corn',
            weight: 100,
            carbs: 18.7,
            fat: 1.4,
            protein: 3.3,
            calories: 86,
        },
        {
            item: 'Tomato',
            weight: 100,
            carbs: 3.9,
            fat: 0.2,
            protein: 0.9,
            calories: 18,
        },
        {
            item: 'Spinach',
            weight: 100,
            carbs: 3.6,
            fat: 0.4,
            protein: 0.9,
            calories: 18,
        },
        {
            item: 'Kale',
            weight: 100,
            carbs: 4.4,
            fat: 1.5,
            protein: 2.9,
            calories: 35,
        },
        {
            item: 'Arugula',
            weight: 100,
            carbs: 3.7,
            fat: 0.7,
            protein: 2.6,
            calories: 25,
        },
        {
            item: 'Cucumber',
            weight: 100,
            carbs: 3.6,
            fat: 0.1,
            protein: 0.6,
            calories: 15,
        },
        {
            item: 'Celery',
            weight: 100,
            carbs: 3,
            fat: 0.2,
            protein: 0.7,
            calories: 16,
        },
        {
            item: 'Broccoli',
            weight: 100,
            carbs: 6.6,
            fat: 0.4,
            protein: 2.8,
            calories: 34,
        },
        {
            item: 'Cauliflower',
            weight: 100,
            carbs: 5,
            fat: 0.3,
            protein: 1.9,
            calories: 25,
        },
        {
            item: 'Asparagus',
            weight: 100,
            carbs: 3.9,
            fat: 0.1,
            protein: 2.2,
            calories: 20,
        },
        {
            item: 'Bell Pepper',
            weight: 100,
            carbs: 6,
            fat: 0.3,
            protein: 1,
            calories: 26,
        },
        {
            item: 'Red Cabbage',
            weight: 100,
            carbs: 7.4,
            fat: 0.2,
            protein: 1.4,
            calories: 31,
        },
        {
            item: 'Eggplant',
            weight: 100,
            carbs: 5.9,
            fat: 0.2,
            protein: 1,
            calories: 25,
        },
        {
            item: 'Whit Mushroom',
            weight: 100,
            carbs: 3.3,
            fat: 0,
            protein: 3.1,
            calories: 22,
        },
        {
            item: 'Brussel Sprout',
            weight: 100,
            carbs: 8.9,
            fat: 0.3,
            protein: 3.4,
            calories: 43,
        },
        {
            item: 'White Onion',
            weight: 100,
            carbs: 3.3,
            fat: 0.1,
            protein: 1.1,
            calories: 40,
        },
        {
            item: 'Ezekiel Flourless Sprouted Grain Bread (1 Slice)',
            weight: 100,
            carbs: 15,
            fat: 0.5,
            protein: 5,
            calories: 80,
        },
        {
            item: 'Pan Trenzado de Arroz Siempre Natural',
            weight: 100,
            carbs: 25.5,
            fat: 7.3,
            protein: 3.6,
            calories: 185,
        },
    ]

    var fats = [
        {
            item: 'Avocado',
            weight: 100,
            carbs: 8.5,
            fat: 14.7,
            protein: 2,
            calories: 160
        },
        {
            item: 'Peanuts',
            weight: 100,
            carbs: 16.1,
            fat: 49.2,
            protein: 25.8,
            calories: 567
        },
        {
            item: 'Almonds',
            weight: 100,
            carbs: 21.5,
            fat: 49.9,
            protein: 25.8,
            calories: 579
        },
        {
            item: 'Pistachios',
            weight: 100,
            carbs: 26.7,
            fat: 46.7,
            protein: 20,
            calories: 600
        },
        {
            item: 'Cashew',
            weight: 100,
            carbs: 32.7,
            fat: 46.3,
            protein: 15.3,
            calories: 574
        },
        {
            item: 'Brazil Nut',
            weight: 100,
            carbs: 10.6,
            fat: 67,
            protein: 14.1,
            calories: 653
        },
        {
            item: 'Macadamia',
            weight: 100,
            carbs: 5.5,
            fat: 75,
            protein: 9.5,
            calories: 747
        },
        {
            item: 'Pecan',
            weight: 100,
            carbs: 14,
            fat: 72,
            protein: 9,
            calories: 740
        },
        {
            item: 'Walnut',
            weight: 100,
            carbs: 13.7,
            fat: 65.2,
            protein: 15.2,
            calories: 654
        },
        {
            item: 'Pine Nut',
            weight: 100,
            carbs: 13.1,
            fat: 68.4,
            protein: 13.7,
            calories: 673
        },
        {
            item: 'Pumpkin Seed Cashita’s',
            weight: 100,
            carbs: 16.7,
            fat: 36.7,
            protein: 40,
            calories: 557
        },
        {
            item: 'Hemp Seed Manitoba Harvest',
            weight: 100,
            carbs: 3.3,
            fat: 50,
            protein: 33.3,
            calories: 600
        },
        {
            item: 'Chia Seed Badia',
            weight: 100,
            carbs: 41.9,
            fat: 30.2,
            protein: 16.3,
            calories: 488
        },
        {
            item: 'Tahini Yaleh',
            weight: 100,
            carbs: 5,
            fat: 60,
            protein: 20,
            calories: 640
        },
        {
            item: 'Coconut',
            weight: 100,
            carbs: 15,
            fat: 33,
            protein: 3.3,
            calories: 354
        },
        {
            item: 'Light Coconut Milk Thai Heritage',
            weight: 100,
            carbs: 1.6,
            fat: 8.1,
            protein: 0.8,
            calories: 82
        },
        {
            item: 'Olive Oil',
            weight: 100,
            carbs: 0,
            fat: 91,
            protein: 0,
            calories: 820
        },
        {
            item: 'Coconut Oil',
            weight: 100,
            carbs: 0.8,
            fat: 99.1,
            protein: 0,
            calories: 833
        },
        {
            item: 'Ghee Butter',
            weight: 100,
            carbs: 0,
            fat: 99.8,
            protein: 0,
            calories: 898
        },
        {
            item: 'Peanut Butter Smuckers',
            weight: 100,
            carbs: 15.6,
            fat: 50,
            protein: 25,
            calories: 562
        },
        {
            item: 'Cashew Butter Mr. Natural',
            weight: 100,
            carbs: 23,
            fat: 43,
            protein: 20,
            calories: 559
        },
        {
            item: 'Almond Butter Kirkland',
            weight: 100,
            carbs: 21.9,
            fat: 53.1,
            protein: 18.8,
            calories: 656
        },
    ]

    var proteins = [
        {
            item: 'Filet Mignon',
            weight: 100,
            carbs: 0,
            fat: 5,
            protein: 21.4,
            calories: 137
        },
        {
            item: 'Pork Tenderloin',
            weight: 100,
            carbs: 0,
            fat: 3.5,
            protein: 26,
            calories: 143
        },
        {
            item: 'Ground Beef 98%',
            weight: 100,
            carbs: 0,
            fat: 2.7,
            protein: 20.5,
            calories: 152
        },
        {
            item: 'Chicken Thigh',
            weight: 100,
            carbs: 0,
            fat: 2.8,
            protein: 20.5,
            calories: 152
        },
        {
            item: 'Salmon',
            weight: 100,
            carbs: 0,
            fat: 4.4,
            protein: 20.5,
            calories: 127
        },
        {
            item: 'Chicken Breast',
            weight: 100,
            carbs: 0,
            fat: 1,
            protein: 31,
            calories: 110
        },
        {
            item: 'Tuna',
            weight: 100,
            carbs: 0,
            fat: 1,
            protein: 25,
            calories: 115
        },
        {
            item: 'Shrimp',
            weight: 100,
            carbs: 0,
            fat: 0.5,
            protein: 20,
            calories: 85
        },
        {
            item: 'White Fish',
            weight: 100,
            carbs: 0,
            fat: 1.7,
            protein: 20,
            calories: 96
        },
        {
            item: 'Squid',
            weight: 100,
            carbs: 0,
            fat: 1,
            protein: 16,
            calories: 78
        },
        {
            item: 'Ground Turkey 99%',
            weight: 100,
            carbs: 0,
            fat: 1.3,
            protein: 20,
            calories: 85
        },
        {
            item: 'Turkey Breast',
            weight: 100,
            carbs: 0,
            fat: 2,
            protein: 22.3,
            calories: 110
        },
        {
            item: 'Liquid Egg Whites',
            weight: 100,
            carbs: 1,
            fat: 0,
            protein: 10,
            calories: 42
        },
        {
            item: 'Egg (One Unit)',
            weight: 100,
            carbs: 0.4,
            fat: 4.8,
            protein: 6.3,
            calories: 72
        },
        {
            item: 'Egg White (One Unit)',
            weight: 100,
            carbs: 0.2,
            fat: 0.1,
            protein: 3.6,
            calories: 17
        },
        {
            item: 'Whey Protien ISO100',
            weight: 30,
            carbs: 1,
            fat: 0,
            protein: 25,
            calories: 110
        },
        {
            item: 'Whey Protein Sascha Fitness',
            weight: 30,
            carbs: 0.5,
            fat: 0,
            protein: 24,
            calories: 105
        },
        {
            item: 'Bone Broth Power Savvy',
            weight: 35,
            carbs: 6,
            fat: 3.5,
            protein: 22,
            calories: 140
        },
        {
            item: 'Veggie Power Savvy',
            weight: 30,
            carbs: 5.4,
            fat: 1.1,
            protein: 20.4,
            calories: 107
        },
        {
            item: 'Greek Yogurt Nonfat Plain Chobani',
            weight: 100,
            carbs: 3.5,
            fat: 0,
            protein: 9.4,
            calories: 53
        },
        {
            item: 'Greek Yogurt Nonfat Plain Fage',
            weight: 100,
            carbs: 3.3,
            fat: 0,
            protein: 10.7,
            calories: 54
        },
        {
            item: 'Yogurt Griego Natural San Martin',
            weight: 100,
            carbs: 4.1,
            fat: 0,
            protein: 8.6,
            calories: 50
        },
        {
            item: 'Yogurt Griego Natural Sketos',
            weight: 100,
            carbs: 4.7,
            fat: 0,
            protein: 10,
            calories: 60
        },

    ]

    async function calculate(placeHolder) {
        const chosenCarb = await carbs.filter((item) => item.item === placeHolder);

        //filter out carb options in a certain range
        const filteredCarbs = await carbs.filter((item) => item.item !== chosenCarb[0].item)

        const filteredRange = await filteredCarbs.map((item) => {
            let startingPoint = chosenCarb[0].carbs

            let serving = parseFloat(startingPoint / item.carbs).toFixed(2)

            let newObj = {
                ...item,
                serving: parseFloat(serving),
                totalGrams: parseFloat(serving) * 100
            }

            return newObj
        })
        setSubList(filteredRange)
    }


    useEffect(() => {
        // calculate('Rice(Cooked)')
        console.log(subList);
    }, [subList])









    // program to append an object to an array

    // function insertProtein(arr, obj) {
    //  // append object
    //     arr.push(obj);
    //     console.log(arr);
    // }

    // // object to add
    // let additionalItem = {
    //     item: 'Filet Mignon',
    //     weight: 100,
    //     carbs: 0,
    //     fat: 5,
    //     protein: 21.4,
    //     calories: 137
    // };

    // call the function
    //insertProtein(proteins, additionalItem);

    //add function to calculate equivalncies for weight, carbs, fat protein and calories

    //add function to calculate equivalent substitutions

    return (
        <div style={{display: 'flex'}}>
        <div style={{width: '20%', padding: '10px'}}>
            <div>GabbyFoodCalculator</div>
            <button type="button" onClick={() => calculate('Rice(Cooked)')}>run</button>
        </div>

            <div style={{width: '80%', padding: '10px'}}>
                {subList.map((item) => (
                    <div style={{ border: '3px solid black', margin: '10px 15px', padding: '10px' }}>
                        <h3>Food: {item.item}</h3>
                        <p>Total Serving: {item.serving}</p>
                        <p>Total Grams: {item.totalGrams}</p>
                    </div>
                ))}
            </div>
        </div>


    )
}
