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

router.route('/productos/:id').get((req, res) => {
	const idProd = req.params.id
	const getById = prods.getById(Number(idProd))
	res.send(getById)
})
