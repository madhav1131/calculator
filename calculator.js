 function addValue(variable)
{
    const display= document.getElementById("display");
    display.value += variable;
    
}
function Tocalculate()
{
    const variable2 = eval(display.value);
    display.value = variable2;
}
function ClearAc()
{
    display.value = "";
}
function DeleteOne() 
{
    let n = display.value.length;
    display.value=display.value.slice(n);

}