export default function getRandomElement <T>(array: Readonly<Array<T>>) {
    return array[Math.floor(Math.random() * array.length)];
}
