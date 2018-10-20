import * as React from 'react'
import { Url } from 'url'

import './Carousel.css'

import BEMHelperFactory from '../library/bem-helper'

interface ICarouselItem {
  imageUrl: Url
}

interface IProps {
  items: ICarouselItem[]
}

const BEMHelper = BEMHelperFactory('carousel')

export default class Carousel extends React.Component<IProps> {
  constructor (props: IProps) {
    super(props)
    this.renderSlides = this.renderSlides.bind(this)
    this.renderPreviousAndNextButtons = this.renderPreviousAndNextButtons.bind(this)
  }

  public render () {
    return (
      <div {...BEMHelper()}>
        {this.renderSlides()}
        {this.renderPreviousAndNextButtons()}
      </div>
    )
  }

  public renderSlides () {
    return (
      <div {...BEMHelper('slide-container')}>
        {this.props.items.map((item, index) => {
          return (
            <div key={`slide_${index}`} {...BEMHelper('slide')}>
              <img src={item.imageUrl.toString()} />
            </div>
          )
        })}
      </div>
    )
  }

  public renderPreviousAndNextButtons () {
    return (
      <>
        <button>Previous</button>
        <button>Next</button>
      </>
    )
  }
}
