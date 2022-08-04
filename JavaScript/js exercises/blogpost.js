let post = {
    title:'a',
    body :'b',
    author:'c',
    views:10,
    comments:[
        {author:'x', body: 'xy'},
        {author:'y', body: 'yz'}
    ],
    isLive :true

};

function Blogpost(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.isLive = false,
    this.comments = [];
    this.views = 10;
}

let p1 = new Blogpost('hey world',`this is the most awesome

amazing blog i have ever made using js `,'likith') 

console.log(post);
console.log(p1);