const txt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const txtArr = txt.split(" ")
console.log(txtArr)

let cleanTxtArr = []

for(let i = 0; i <= txtArr.length; i++) {
    if(cleanTxtArr.includes(txtArr[i]) === false){
        cleanTxtArr.push(txtArr[i])
    }
}

console.log(cleanTxtArr)

const input = [
    "()",
    "(()((()))(())(()(()))())",
    "(()(())(((()(()()))((((()()())))))"
]

//console.log(input)

for (let i = 0; i < input.length; i++){
    console.log(input[i])
    findBracketAreClosed(input[i])
}

function findBracketAreClosed(input) {
    let data = input.split()
    let openBracket = 0
    let closeBracket = 0

    for(let i = 0; i < data.length; i++){
        switch (data[i]) {
            case "(":
                openBracket++
                break
            case ")":
                closeBracket++
                break
        }
    }

    if (openBracket === closeBracket){
        console.log("it is the same")
    } else {
        console.log("it is not the same")
    }

}