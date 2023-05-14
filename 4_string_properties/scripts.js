let s = " Rohit Patil ";
console.log(s, "simple");
console.log(s.length, "length");
console.log(s.endsWith = "!!", "the string ended with !!");
console.log(s.indexOf("i"), "first index of i");
console.log(s.lastIndexOf("i"), "last index of ");
console.log(s.replace("a", "o"), " replace a with o");
console.log(s.toLowerCase(), "all small");
console.log(s.toUpperCase(), "all big");
console.log(s.trim(), "remves the starting space");
console.log(s.search("t"), "first index");
console.log(s.startsWith("sir"), "starts with");
console.log(s.concat("dada"), "joins");
console.log(s.slice(2, 5), "prints part of it [)");

// method chaining: calling many functions one after the another.

s = s.charAt(3).toUpperCase();
console.log(s);

// =======================running=====================

//tolacalestring :  is the function which is used to convert the string to the local language notation.

s = 1112244.79;
console.log(s.toLocaleString("hi-IN"));
console.log(s.toLocaleString("en-US"));

//changing to the curency format of the string
console.log(s.toLocaleString("hi-IN", { style: "currency", currency: "IND" }));


