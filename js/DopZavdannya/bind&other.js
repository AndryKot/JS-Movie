
'use strict';
function getName(message, second) {
    return 'Hello' + message + this.name + second;
}

var user = {
    name: 'Max',
};

var user2 = {
    name: 'Dima'
};


var contextWithUserFn = getName.bind(user, ' first arg ');
// var contextWithUserFn2 = getName.bind(user2);
console.log(contextWithUserFn());
//
var newFirstFn = contextWithUserFn.bind(user2, ' second Arg ');
//
console.log(newFirstFn());

// forEach, slice, map, reduce, some, filter


// bind
function myBind(func, context){

    return function(args) {
        return func.apply(context, args);
    }
}

var a = function () {
    return this;
};

var b = myBind(a, {foo:'var' });

var c = myBind(b, {trash: 'wtf'});

var d = myBind(c, { g: '1' });

console.log(b());
console.log(c());
console.log(d(c.context));

var one = function () {
    return this

};
var two = one.bind({foo: "var"});
var three = two.bind(null);
console.log(three());

Function.prototype.bind = function (context) {
    var func = this;
    return function (args) {
        return func.apply(context, args);

    }
}
var two = one.bind({foo: "bam"});
var newThree = two.bind(null);
console.log(newThree());

// bind 2.0
var sum = function() {
    return [].reduce.call(arguments, function(result, current) {
        return result + current;
    }, this.sum);
};

var bind2 = function(fn, context) {
    // обрезаем ненужные аргументы (функцию и контекст)
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        // здесь все аргументы будут необходимы
        var fnArgs = [].slice.call(arguments);
        // собираем все
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

var bindedSum = bind2(sum, {sum: 10}, 20, 30);
console.log(bindedSum(50, 60, 70));;



// forEach

var each = function(arr, callback) {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
    }
};

each([1, 2, 3], function(num, i, nums) {
    console.log('Number: ' + num + ', index: ' + i + ',', nums)
});

// map

var myMap = function(arr, callback, thisArg) {
    var i=0, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};

var nums = [10, 20, 30, 40];
myMap(nums,function (num, i, thisArg) {
    console.log('Number: ' + num + ', index: ' + i + ',', nums);
});


// filter

var myFilter = function(arr, callback, thisArg) {
    var i, length = arr.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};

var strs = ['Hello', ',', 'JavaScript', 'World', '!'];

var data = myFilter(strs, function(str) {
    return str.toLowerCase() !== str;
});

console.log(data);

// some

var mySome = function(arr, callback, thisArg) {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};


// reduce
var myReduce = function(arr, callback, startValue) {
    var i, length = arr.length, result = startValue;
    for (i = 0; i < length; i = i + 1) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};

var arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
var strs = ['JavaScript', 'is', 'awesome'];

var strResults = myReduce(strs, function(phrase, word, index) {
    return (index === 0) ? phrase + word : phrase + ' ' + word;
}, '');

var arrResults = myReduce(arrs, function(result, current) {
    return result.concat(current);
}, []);
console.log(strResults);
console.log(arrResults);