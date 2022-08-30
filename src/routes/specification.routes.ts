import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()

const specificationRepository = new SpecificationRepository()

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(specificationRepository)

  createSpecificationService.execute({ name, description})

  return response.status(201).send()
})

specificationsRoutes.get("/", (request, response) => {
  const list = specificationRepository.list()

  return response.status(201).json(list)
})

export { specificationsRoutes }