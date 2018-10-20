import BEMHelper from './bem-helper'

it('creates expected class name for root block', () => {
  const baseScope = BEMHelper('block')
  expect(baseScope()).toEqual({ className: 'block' })
})

it('creates expected class name for block elements', () => {
  const baseScope = BEMHelper('block')
  expect(baseScope('element')).toEqual({ className: 'block__element' })
})

it('creates expected class name when a modifier is suppied', () => {
  const baseScope = BEMHelper('block')
  expect(baseScope('element', ['modifier'])).toEqual({ className: 'block__element block__element-modifier' })
})

it('creates expected class for multiple modifiers', () => {
  const baseScope = BEMHelper('block')
  expect(baseScope('element', ['modifier1', 'modifier2'])).toEqual({ className: 'block__element block__element-modifier1 block__element-modifier2' })
})
