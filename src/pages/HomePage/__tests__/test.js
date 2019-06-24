import React from 'react'
import HomePage from '../index'
import renderer from 'react-test-renderer'

it('Se renderizó el homePage', () => {
  const ss = renderer.create(
    <HomePage />
  ).toJSON()

  expect(ss).toMatchSnapshot()
})
