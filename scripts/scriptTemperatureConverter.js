function getElements(){
    selectIn = document.getElementById("selectIn");
    selectOut = document.getElementById("selectOut");
    inputIn = document.getElementById("inputIn");
    inputOut = document.getElementById("inputOut");
    selectOut.value = "F";
}

function changeSelect(select){
    switch (select) {
        case "IN":
            switch (selectIn.value) {
                case "C":
                    if (selectOut.value == "C") {selectOut.value = "F"}
                    break
                case "F":
                    if (selectOut.value == "F") {selectOut.value = "C"}
                    break
                case "K":
                    if (selectOut.value == "K") {selectOut.value = "C"}
                    break
            }
            changeInput("OUT")
            break
        case 'OUT':
            switch (selectOut.value) {
                case "C":
                    if (selectIn.value == "C") {selectIn.value = "F"}
                    break
                case "F":
                    if (selectIn.value == "F") {selectIn.value = "C"}
                    break
                case "K":
                    if (selectIn.value == "K") {selectIn.value = "C"}
                    break
            }
            changeInput("IN")
            break
    }
}   

function changeInput(input) {
    let res = 0
    switch (input) {
        case "IN":
            if (inputIn.value == '') {
                inputOut.value = ''
                return
            }
            if (selectIn.value == "C" && selectOut.value == "F"){
                /*C to F*/
                res += 9*Number(inputIn.value)/5 + 32
            }
            if (selectIn.value == "C" && selectOut.value == "K"){
                /*C to K*/
                res += Number(inputIn.value)+273
                if (res < 0){res = 0}
            }
            if (selectIn.value == "F" && selectOut.value == "C"){
                /*F to C*/
                res += (5*Number(inputIn.value) -160) / 9
            }
            if (selectIn.value == "F" && selectOut.value == "K"){
                /*F to K*/
                res += (5*Number(inputIn.value) + 2297) / 9
                if (res < 0){res = 0}
            }
            if (selectIn.value == "K" && selectOut.value == "C"){
                /*K to C*/
                res += Number(inputIn.value)-273
            }
            if (selectIn.value == "K" && selectOut.value == "F"){
                /*K to F*/
                res += (9*Number(inputIn.value) -2297) / 5
            }
            inputOut.value = res
            break
        case "OUT":
            if (inputOut.value == '') {
                inputIn.value = ''
                return
            }
            if (selectOut.value == "C" && selectIn.value == "F"){
                /*C to F*/
                res += 9*Number(inputOut.value)/5 + 32
            }
            if (selectOut.value == "C" && selectIn.value == "K"){
                /*C to K*/
                res += Number(inputOut.value)+273
                if (res < 0){res = 0}
            }
            if (selectOut.value == "F" && selectIn.value == "C"){
                /*F to C*/
                res += (5*Number(inputOut.value) -160) / 9
            }
            if (selectOut.value == "F" && selectIn.value == "K"){
                /*F to K*/
                res += (5*Number(inputOut.value) + 2297) / 9
                if (res < 0){res = 0}
            }
            if (selectOut.value == "K" && selectIn.value == "C"){
                /*K to C*/
                res += Number(inputOut.value)-273
            }
            if (selectOut.value == "K" && selectIn.value == "F"){
                /*K to F*/
                res += (9*Number(inputOut.value) -2297) / 5
            }
            inputIn.value = res
            break
    }
    console.log(res)
    
}
