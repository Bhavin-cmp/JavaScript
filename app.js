const hobbies = ['coding',' R & D', 'music','reading'];

console.log(hobbies);

hobbies.push('cricket');
console.log(hobbies);

const find = hobbies.findIndex((iteem) => {
  return iteem === 'cricket';  
})

console.log(find);

const checkObj = hobbies.map((item) => {
    return ({text : item});
});

console.log("checkObj", checkObj);