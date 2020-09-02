let testArea = document.querySelector("#testArea")
let connectionTest = document.createElement("p")
connectionTest.textContent = "Is this thing working?"
testArea.appendChild(connectionTest)

const testObj = {
    name: 'Landon',
    age: 33,
    eyeColor: 'blue',
    father: true,
    children: [
        {
            name: 'Child1',
            age: 6,
            eyeColor: 'blue',
            father: false,
        },
        {
            name: 'Child2',
            age: 2,
            eyeColor: 'green',
            father: false,
        },
    ]
}

const objKeyCheck = (obj, key) => {
    let result = obj.hasOwnProperty(key)
    
    return result
    };

objKeyCheck(testObj, 'children')

const objectCheck = ( obj ) => {
    if (typeof obj === 'object' && obj !== null) {
        
        return true
    }  else {
       
    } 
   };


objectCheck({key: 'value'} )
objectCheck('Hello')
objectCheck([1,4])

// function isSumPossible(arr, sum) {
// let outcome = []
// arr.forEach((number, index) => {
//     console.log(`This number is ${number}`)
//     console.log(`This index loop is ${index}`)
//     let diff = sum - number
//     console.log(`Sum ${sum} - number ${number} = diff ${diff}`)
//     let k = arr.indexOf(diff)
//     console.log(`${k} is the index of ${diff}`)
//     if (k > -1 && k !== index) {
//         outcome.push(index)
//         outcome.push(k)
//     }
// })
// console.log(outcome)
// return outcome
//     }

    function isSumPossible(arr, sum) {
        let outcome = []
        let indexAccu = []
        arr.forEach((number, index) => {
            for (let i = 0; i < arr.length; i++) {
                if (number + arr[i] === sum) {
                    indexAccu.push(index)
                    console.log(indexAccu)
                    if (indexAccu.includes(i) === false){
                        outcome.push([number, arr[i]])
                        console.log(outcome)
                    }          
                };
        }
        })
        return outcome
            }

isSumPossible([3, 5, 2, -4, 8, 11], 7)
let emptyArray = []
console.log(emptyArray.length)


//need to do a loop within a loop, skipping it's own index number