function average(scores) {
    // add all array items together
    var total = 0;
    scores.forEach(function(score){
    total += score;
    }); 

    // divide by number of array items
    var avg = total/scores.length
    //round
    return Math.round(avg);
}


var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));