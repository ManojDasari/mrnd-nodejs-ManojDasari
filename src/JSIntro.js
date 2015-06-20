
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum = 0;
	for (var i = arrayOfNums.length - 1; i >= 0; i--) {
		sum += arrayOfNums[i];
	};
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var unique_sum = 0;
	var sorted_nums = arrayOfNums.sort();
	var i,size = sorted_nums.length;
	for (i = 0; i+1 < size; i++) {
		if(sorted_nums[i]!=sorted_nums[i+1]){
			unique_sum += sorted_nums[i];
		}
	};

    unique_sum += sorted_nums[i];
	return unique_sum;
}

exports.ReverseString = function(str){
	str=str.split("").reverse().join("");
	return str;
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
	arrayOfStrings.reverse();
	return arrayOfStrings;
}