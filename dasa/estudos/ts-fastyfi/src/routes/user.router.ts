import { FastifyInstance } from 'fastify'
import { loginSchema } from '../schema'
import * as controllers from '../controllers'

export async function userRouter(fastify: FastifyInstance) {
  fastify.decorateRequest('authUser', '')

  fastify.route({
    method: 'POST',
    url: '/getMessage',
    schema: loginSchema,
    handler: controllers.pubsubGetMessage
  })

  fastify.route({
    method: 'POST',
    url: '/filaGuarda',
    schema: loginSchema,
    handler: controllers.pubsubPostMessage
  })
} 