import * as React from 'react'

import './App.css'

import BEMHelperFactory from '../library/bem-helper'
import Carousel from './Carousel'

const sampleImages = [{
  imageUrl: new URL('https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e833b90b28f1033ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/eb35b90f28f3033ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e83cb6062df0073ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/ee31b8092af11c22d2524518b7454093e577e4d004b014429cf9c47fa1e8b1_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/ed31b10a2af41c22d2524518b7454093e577e4d004b014429cf9c47fa1e8b1_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/e83cb90a28f6063ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/ea35b30e28f3033ed1584d05fb1d4f90e671e2d31cac104496f9c87ca1ebb0bc_640.jpg')
}, {
  imageUrl: new URL('https://pixabay.com/get/ed36b90b2bf61c22d2524518b7454093e577e4d004b014429cf9c47fa1e8b1_640.jpg')
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
