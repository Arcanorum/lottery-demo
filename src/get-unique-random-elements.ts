import getArrayExcept from './get-array-except';
import getRandomElement from './get-random-element';

export default function getUniqueRandomElements<T>(array: Readonly<Array<T>>, amount: number) {
    // The amount of unique elements to try to find in the given array cannot possibly be more than
    // the amount of items in the array. At most they could be equal, if every item is unique.
    if (amount > array.length) {
        // eslint-disable-next-line no-param-reassign
        amount = array.length;
    }

    const elementsSoFar = [];

    for (let i = 0; i < amount; i += 1) {
        const arrayWithoutElementsSoFar: Readonly<Array<T>> = getArrayExcept(array, elementsSoFar);

        elementsSoFar.push(getRandomElement(arrayWithoutElementsSoFar));
    }

    return elementsSoFar;
}
