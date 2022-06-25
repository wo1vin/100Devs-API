const express = require('express');
const app = express();
const PORT = 8000;

const classes = {
    '33' :{
    'title': 'The Hunt Part 1',
    'classNumber': 33,
    'classDate': '2022-05-10',
    'description': 'Interview Prep',
    'slides':'https://slides.com/leonnoel/100devs2-interview-prep',
    'vod':'https://youtu.be/lIE1LFz4LJM',
    'homeworkAssigned': "Follow RC's \"Fairy Job Mother\"",
    'homeworkLink':'https://twitter.com/scastanos_',
    'resources':'https://docs.google.com/document/d/1Kk5sGlYEoFX58h8hTUgl8T4jK8wT4duLNGGcgJB04xQ/edit?usp=sharing'
    },
    '34' :{
        'title': 'The Hunt Part 2',
        'classNumber': 34,
        'classDate': '2022-05-12',
        'description': 'CAR, EUE, and PREP',
        'slides':'https://slides.com/leonnoel/100devs2-interview-prep-part-2',
        'vod':'https://youtu.be/KM1RyffIKMg',
        'resources':'https://docs.google.com/document/d/1Kk5sGlYEoFX58h8hTUgl8T4jK8wT4duLNGGcgJB04xQ/edit?usp=sharing'
    },
    'noData' :{
        'title': 'noData',
        'classNumber': 0
    }
}

app.get('/',(req,res) => { //network request
    res.sendFile(__dirname +  '/index.html') // __dirname tells the server where to go look for the index.html file

})
//it doesnt matter what we call the query param after '/api/:'. but it has to match what you put at the end of req.params.
app.get('/api/:class',(req, res) => {
    const classNumber = req.params.class.toString();
    //whenever a reqest comes in, if there is a bit of text after the slash, I'll be able to grab it with this line of code: req.params.class

    //console.log(classes[classNumber].title)
    //just logging the data without responding will leave the app waiting for a response

    if(classes[classNumber]){
        res.json(classes[classNumber])
    } else {
        res.json(classes['noData'])
    }
    // if the class number exists in the classes object, respond with that infco
})
//when the server is running, console.log 
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})