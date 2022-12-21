const string =prompt("enter a text");
const nospecialcharacters= string.replace(/[^a-zA-Z0-9 ]/gi,"");
console.log(nospecialcharacters);

