export default function getArrayExcept <T>(array: Readonly<Array<T>>, except: Array<T>) {
    return array.filter((elem) => !except.includes(elem));
}
