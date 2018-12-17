const express = require('express')
const { json } = require('body-parser')
const app = express()


app.use(json())

const Source = [
	{name: 'De Correspondent', description: 'Dutch left-wing paper, based in Amsterdam', url: 'www.correspondent.nl'}
]

app.get('/api/getSource', (req, res) => {
	res.send(Source)
  })

app.post('/api/addSource', (req, res) => {
	const newSource = {
	  name: req.body.name,
	  description: req.body.description,
	  url: req.body.url
	}
	Source.push(newSource)
	res.send(Source)
  })

const port = 3001
app.listen(port, () => console.log(`magic is happening on ${port}`))
