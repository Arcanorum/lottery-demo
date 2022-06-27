export default function countArrayMatches <T>(array1: Array<T>, array2: Array<T>) {
    return array1.filter((i) => array2.includes(i)).length;
}
