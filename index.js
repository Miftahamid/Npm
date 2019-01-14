#! /usr/bin/env node


const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})

"bin": {
    "Mifta": "./index.js"
  },



  {
    "name": "Mifta Hamid",
    "website": "https://Mifta.github.io/",
    "linkedin": "https://www.linkedin.com/messaging/thread/6370015072009355264/",
    "github": "perryf",
    "email": "pjfust@gmail.com",
    "resume": "https://perryf.github.io/img/resume-fustero.pdf",
    "proficient-technologies": [
        "html", 
        "css", 
        "javascript", 
        "react", 
        "angular", 
        "mern", 
        "mean",
        "sql",
        "node", 
        "mongodb"
    ],
    "other-skills": [
        "teaching",
        "piano"
    ]
}