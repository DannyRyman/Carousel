import { configure, shallow, ShallowWrapper } from 'enzyme'
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16'
import * as React from 'react'

configure({ adapter: new ReactSixteenAdapter() })

import Carousel from './Carousel'

const items = [1, 2, 3, 4, 5]
  .map(index => ({
    imageUrl: new URL(`http://image_${index}`),
    likes: index,
    user: `user_${index}`
  }))

test('Renders the expected images on load', () => {
  const carousel = loadCarousel()
  assertShownSlides(carousel, 4, 0, 1)
})

test('Clicking previous cycles left', () => {
  const carousel = loadCarousel()
  carousel.find('.carousel__btn-previous').simulate('click')
  assertShownSlides(carousel, 3, 4, 0)
})

test('Clicking next cycles right', () => {
  const carousel = loadCarousel()
  carousel.find('.carousel__btn-next').simulate('click')
  assertShownSlides(carousel, 0, 1, 2)
})

function loadCarousel () {
  return shallow(<Carousel items={items} />)
}

function assertShownSlides (
  carousel: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
  expectedPreviousIndex: number,
  expectedSelectedIndex: number,
  expectedNextIndex: number) {
  const slides = carousel.find('.carousel__slide')
  expect(slides).toHaveLength(3)
  expect(slides.get(0).props['data-index']).toEqual(expectedPreviousIndex)
  expect(slides.get(1).props['data-index']).toEqual(expectedSelectedIndex)
  expect(slides.get(2).props['data-index']).toEqual(expectedNextIndex)

  const selectedSlides = carousel.find('.carousel__slide-selected')
  expect(selectedSlides).toHaveLength(1)
  expect(selectedSlides.get(0).props['data-index']).toEqual(expectedSelectedIndex)
}
