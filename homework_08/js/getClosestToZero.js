function getClosestToZero(){
  var arr=[];
  for (var i=0; i<arguments.length; i++){
   	arguments[i]=0-Math.abs(arguments[i]);
   	arr.push(arguments[i]);
 }
  arr.sort();
  return arr[0];
}