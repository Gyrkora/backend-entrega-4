import express from 'express'
import { router } from './routes.js'

const app = express()
const __dirname = process.cwd()

//# MWs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use('/static', express.static(__dirname + '/public'))

//#levantando
app.listen(8080, () => {
	console.log('server up')
})
