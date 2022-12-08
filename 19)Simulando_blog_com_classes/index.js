const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Titulo do post", "Lorem ipsum dolor");

post.addComment("Vinicius Solon", "Comentario");

console.log(john);
console.log(post);
