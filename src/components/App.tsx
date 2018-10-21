import * as React from 'react'

import './App.css'

import BEMHelperFactory from '../library/bem-helper'
import Carousel from './Carousel'

const sampleImages = [{
  imageUrl: new URL('https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104491f0c079afebb3bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104491f0c079afebb3bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e833b90b28f1033ed1584d05fb1d4f90e671e2d31cac104491f0c079afebb3bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/eb35b90f28f3033ed1584d05fb1d4f90e671e2d31cac104491f0c079afebb3bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e83cb6062df0073ed1584d05fb1d4f90e671e2d31cac104491f0c079afebb3bc_640.jpg')
}]

const BEMHelper = BEMHelperFactory('app')

class App extends React.Component {
  public render () {
    return (
      <div {...BEMHelper()}>
        <header {...BEMHelper('header')}>
          <h1>Carousel Test</h1>
        </header>
        <Carousel items={sampleImages} />
      </div>
    )
  }
}

export default App
