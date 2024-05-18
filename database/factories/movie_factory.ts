import factory from '@adonisjs/lucid/factories'
import Movie from '#models/movie'

export const MovieFactory = factory
  .define(Movie, async ({ faker }) => {
    return {}
  })
  .build()