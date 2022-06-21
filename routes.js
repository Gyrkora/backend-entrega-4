import { Router } from 'express'
import fs from 'fs'
import { Contenedor } from './productos.js'

export const router = Router()

const db = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))

const prods = new Contenedor(db)

//# Creando rutas
router
	.route('/productos')
	.get((req, res) => {
		const getAll = prods.getAll()
		res.send(getAll)
	})
	.post((req, res) => {
		const { tittle, price, thumbnail } = req.body

		const saveProd = prods.save({ tittle, price, thumbnail })
		res.send(saveProd)
	})

router
	.route('/productos/:id')
	.get((req, res) => {
		const idProd = req.params.id
		const getById = prods.getById(Number(idProd))
		res.send(getById)
	})
	.delete((req, res) => {
		const idRemoved = req.params.id
		const deleteById = prods.deleteById(Number(idRemoved))
		res.send('el id eliminado es:' + idRemoved)
	})
// .put((req, res) => {
// 	//recibe y actualiza un producto por su id

// 	let idProd = req.params.id - 1
// 	const getById = prods.getById(Number(idProd)) //ya devuelve parsed el producto
// 	const { tittle, price, thumbnail } = req.body
// 	tittle = getById[idProd].tittle
// 	price = getById[idProd].price
// 	thumbnail = getById[idProd].thumbnail

// 	return getById
// 	// res.json({
// 	// 	actualizado: tittle,
// 	// })

// 	// const palabraARemplazar = getById[]
// })
