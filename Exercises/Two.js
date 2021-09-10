'use strict'

class ExerciseTwo
{
    constructor() {
        Object.preventExtensions(this);
    }

    static #ValidateInput(input) {
        if(Array.isArray(input) == false) {
            return false;
        }

        const arraySize = input.length;
        if(arraySize < 2 || arraySize > 105) {
            return false;
        }
    }

    static CanObtainStrictlyIncreasingSequence(input, secondTime = false) {
        if(this.#ValidateInput(input) == false)
            return false;

        const arraySize = input.length;
        let indexBreaker = -1;
        for(let i = 0; i < arraySize; i++) {
            if(input[i] >= input[i + 1]) {
                indexBreaker = i;
                break;
            }
        }

        if(indexBreaker == -1) {
            return true;
        } else {
            if(secondTime) {
                return false;
            }

            let inputA = [...input];
            let inputB = [...input];
            inputA.splice(indexBreaker, 1);
            inputB.splice(indexBreaker + 1, 1);
            let result = this.CanObtainStrictlyIncreasingSequence(inputA, true);
            if(result == false) {
                result = this.CanObtainStrictlyIncreasingSequence(inputB, true);
            }
            return result;
        }
    }
}

module.exports = ExerciseTwo;