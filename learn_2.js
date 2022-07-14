function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
function change_color(){
    j++;
    if(j === 4) j=0;
    const y = document.getElementById("demo");
    switch (j){
        case 0:y.style.color="#ff0000"; break;
        case 1:y.style.color="#00ff00"; break;
        case 2:y.style.color="#0000ff"; break;
        case 3:y.style.color="#000000"; break;
        default:y.style.color="#ffffff"; break
    }
}