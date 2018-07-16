let ary = [1,2,3,4,5];
console.log(ary);
ary = [...ary.splice(3,1),...ary];
console.log(ary);