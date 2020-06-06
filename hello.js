
/*function findLongestArraySnippetBasedOnSum(s, arr) {
        var max_so_far = Number.NEGATIVE_INFINITY;
        var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
s=12

console.log(findLongestArraySnippetBasedOnSum(array)); */



// Question 2:

    
/*let keys = ['username', 'first-name', 'last-name', 'age', 'username'] ;

let values = ['johndoe', 'John', 'Doe', 35, 'johnny'];

var result = keys.reduce(function(result, field, index) {
  result[values[index]] = field;
  return result;
}, {})

console.log(result);*/