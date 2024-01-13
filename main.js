document.write("72.to check whether the first and last elements are the same in a given array of integers of length 3."+"<br>");
function test72(arr){
    return arr[0]==arr[arr.length-1];
}
document.write("The array :[1,2,1] ,Ans :"+test72([1,2,1])+"<br>");
document.write("The array :[1,2,3] ,Ans :"+test72([1,2,3])+"<br><br>");