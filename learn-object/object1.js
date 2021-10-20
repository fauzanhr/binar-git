var Human = {
    head: 1,
    eyes: 2,
    ears: 2,
    hands: 2,
    foots: 2
};

console.log(Human)
// var propName;
// for (propName in Human) {
//     console.log(propName + " :" + Human[propName])
// }

const clone = (obj) => Object.assign({}, obj);

// console.log(Object.keys(Human)[0])
const renameKey = (object, key, newKey) => {
    const clonedObj = clone(object);
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
};

console.log(renameKey(Human, 'head', 'kepala'))
console.log(renameKey(Human, 'eyes', 'mata'))
  
// var propName;
// for (propName in Human) {
//     console.log(propName + " : " + Human[propName])
// }