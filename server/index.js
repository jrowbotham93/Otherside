const express = require('express')
const { json } = require('body-parser')
const app = express()

app.use(json())

	
const leftWing = [
	{ Source: 'BBC', URL: 'https://www.bbc.co.uk/news/politics/uk_leaves_the_eu', id: 0 },
	{ Source: 'Guardian', URL: 'https://www.theguardian.com/politics/ng-interactive/2017/jul/20/where-are-we-up-to-in-these-brexit-talks', id: 1 },
	{ Source: 'Independent', URL: 'https://www.independent.co.uk/topic/brexit',  id: 2 },	
]

// imagine we got this data from our sequelize statement instead or a external api call

// server route to get all of our articles
app.get('/api/leftWing', (req, res) => {


	res.send(leftWing)
})

const port = 3333
app.listen(port, () => console.log(`magic is happening on ${port}`))
