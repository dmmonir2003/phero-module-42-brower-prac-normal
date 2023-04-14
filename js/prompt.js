
const alartBtn = () => {
    alert("welcome brower xplanation");
}

const confirmBtn = () => {
    // confirm return kora true or false////
    const result = confirm("will you marry me?");
    if (result == true) {
        alert("i love you janamon!");
    }
    else if (result == false) {
        console.log("dgm....dura gia mor");
    }
}

const prompBtn = () => {
    const name = prompt("what is your name");
    if (name == null) {
        alert("please enter your name again ")
    }
    else {
        console.log("welcome input task use brower not use js coding ");
    }
}