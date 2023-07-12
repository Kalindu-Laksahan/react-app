const colors = ["red", "green", "blue"];

//map function
const items = colors.map(function(color){ 
    return '<li>' + color + '</li>';
});
console.log(items);

// arrow functions
const newItems = colors.map(color => '<li>' + color + '</li>');
console.log(newItems);






