// 3.9-home work \\

var newArray = [3.02, -3.65, 5, -9];

function nNumbers (aOfNumbers) {

    var result = [];
    var rounding = -1;

    for (var i = 0; i < aOfNumbers.length; i++) {
        // var element = aOfNumbers[i];

        if (aOfNumbers[i] < 0) {
            result.push(Math.round(newArray[i]) * rounding);
        }
        else {
            result.push(Math.round(newArray[i]));
        }        
    }

    return result;
}

console.log(nNumbers(newArray));
console.log(alert(nNumbers(newArray)) );