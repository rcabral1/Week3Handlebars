const express = require('express')
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000
const app = express()

//Set view engine
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: ".hbs",
    helpers:{
        getShortComment(comment){
            if(comment.length < 60){
                return comment
            }
            return comment.substring(0, 60)+'...'
        }
    }
}))

app.set('view engine', 'hbs')

//route to render the page
app.get('/',(req, res)=>{
    res.render('home', {
        post:[
            {
                author:"Ryan C",
                image:"https://picsum.photos/500/500",
                comments:['comment 1', 'comment 2', 'Amet velit reprehenderit commodo nisi laborum qui ut. Veniam sit do do incididunt irure non in fugiat. Esse ex consectetur ullamco exercitation veniam nisi excepteur. Do duis duis Lorem voluptate duis. Sint ipsum labore sunt minim laboris nostrud quis aute irure nisi quis elit eu.']
            },
            {
                author:"Drake",
                image:"https://picsum.photos/500/500?2",
                comments:[]
            },
            {
                author:"Jordan D",
                image:"https://picsum.photos/500/500?3",
                comments:['Yo this is awesome', 'Dolor id quis in qui officia anim ex velit anim est pariatur mollit aliqua. Deserunt cupidatat aliquip ut dolore amet aliqua non aute ex cillum incididunt culpa tempor eu. Pariatur non pariatur exercitation exercitation qui quis fugiat velit dolore. Eu qui fugiat minim duis nisi culpa nostrud anim do dolor Lorem fugiat. Laborum cupidatat incididunt sunt irure. Elit fugiat exercitation aliquip mollit enim mollit ea cillum non eu ea nulla velit.', 'This is the best']
            },
        ]
    })
})

//set up port for connection
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})