const path = require('path');
const express = require("express");
const morgan = require('morgan');
const details = require('./details');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'))

app.use('/public', express.static(path.join(__dirname, 'public'))); 

app.get("/", (req, res) => {
  const posts = details.list();  

  res.send(`
    <html>
      <head>
        <link rel='stylesheet' href='/public/style.css' />
      </head>
      <body>
        <div>
          <div id='boat'>
            <img src='./public/images/the-belafonte.jpg'>
          </div>
          <nav>
            <a href='/'>
              <h2>HOME</h2>
            </a>
          </nav>
          <div id='content'>
            <div class='header'>
              <h1><q>Let me tell you about my boat</q></h1>
              <h4>-Steve Zissou</h4>
            </div>
            <div id = 'item-container'>
              ${posts.map(post => `
                <a href='/details/${post.id}'>
                  <div class='item'>
                    <img src='/public/images/${post.image}'>
                    <h2>
                      ${post.title}
                    </h2>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </body>
    </html>
  `)
});


app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  const post = details.find(id);
  res.send(`
      <html>
        <head>
          <link rel='stylesheet' href='/public/style.css' />
        </head>
        <body>
          <nav>
            <a href='/'>
              <h2>HOME</h2>
            </a>
          </nav>
          <div class='header'>
            <h1>${post.title}</h1>
          </div>
          <div class='item-detail'>
            <h3>${post.content}</h3>
            <img src='./public/images/${post.image}'>
          </div>
        </body>
      </html>
    `);
});


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});