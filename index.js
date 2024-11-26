const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require('path')
// const { MongoClient, ServerApiVersion } = require('mongodb')

// Init PORT
const PORT = process.env.PORT || 3000

// Password: bf3ZQfF3WBs6s4Fw

// Create object app
const app = express()
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

// const client = new MongoClient(uri, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// })

async function start() {
	try {
		await mongoose.connect(
			'mongodb+srv://DanilTod:bf3ZQfF3WBs6s4Fw@cluster0.sukl2.mongodb.net/'
		)

		// await client.connect()
		// await client.db('admin').command({ ping: 1 })
		// console.log(
		// 	'Pinged your deployment. You successfully connected to MongoDB!'
		// )

		app.listen(PORT, () => {
			console.log('Server conected...')
		})
	} catch (e) {
		console.log(e)
	}
}

start()
