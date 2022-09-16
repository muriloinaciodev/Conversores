function getElements(){
    selectIn = document.getElementById("selectIn");
    selectOut = document.getElementById("selectOut");
    inputIn = document.getElementById("inputIn");
    inputOut = document.getElementById("inputOut");
}

function changeSelect(select){
    if (select == 1){
        console.log('Foi o IN')
    }
    if (select == 2){
        console.log('Foi o OUT')
    }
}