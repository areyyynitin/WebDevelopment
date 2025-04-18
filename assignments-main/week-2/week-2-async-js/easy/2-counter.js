setTimeout(callBack , 1000);

let ctr = 1;
function callBack(){
    console.clear();
    console.log(ctr);
    ctr++;
    setTimeout(callBack,1000)
}