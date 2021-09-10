'use strict'

class ExerciseOne 
{
    constructor() {
        Object.preventExtensions(this);
    }

    static #ValidateInput(input) {
        if(Array.isArray(input) == false) {
            return false;
        }

        const arraySize = input.length;
        if(arraySize < 2 || arraySize > 10) {
            return false;
        }

        return true;
    }

    // static CalculateLargestProduct(input) {
    //     if(this.#ValidateInput(input) == false) {
    //         return 0;
    //     }

    //     const arraySize = input.length;
    //     let largestProduct = -Infinity;
    //     input.forEach((item, index) => {
    //         if((index + 1) < arraySize) {
    //             const product = item * input[index + 1];
    //             largestProduct = product > largestProduct ? product : largestProduct;
    //         }
    //     });

    //     return largestProduct;
    // }

    static CalculateLargestProduct(input) {
        if(this.#ValidateInput(input) == false) {
            return 0;
        }

        const arraySize = input.length;
        let largestProduct = -Infinity;

        for(let i = 0; i < arraySize; i++) {
            const product = input[i] * input[i + 1];
            largestProduct = product > largestProduct ? product : largestProduct;
        }

        return largestProduct;
    }
}

module.exports = ExerciseOne;