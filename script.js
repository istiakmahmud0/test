var numbers = [1,2,3,4,5,6]
function sum(n){
   var summmation = 0;

//    do the actual sum
    summaion = n.reduce(function(o,n){
        return  o+n; })

        return summmation;
}

console.log(sum(numbers));