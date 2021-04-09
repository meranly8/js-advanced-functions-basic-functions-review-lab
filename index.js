function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char="*") {
    return function(adj="special"){
        return `You are ${char}${adj}${char}!`
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return a / b
    }

}

function actionApplyer(start, ftnArry) {
   ftnArry.forEach(ftn => {
       start = ftn(start)
   })
   return start
}