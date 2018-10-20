import * as React from 'react'
import { Url } from 'url'

interface ICarouselItem {
  imageUrl: Url
}

interface IProps {
  items: ICarouselItem[]
}

export default class Carousel extends React.Component<IProps> {
  constructor (props: IProps) {
    super(props)
    this.renderSlides = this.renderSlides.bind(this)
    this.renderPreviousAndNextButtons = this.renderPreviousAndNextButtons.bind(this)
  }

  public render () {
    return (
      <div className='carousel'>
        {this.renderSlides()}
        {this.renderPreviousAndNextButtons()}
      </div>
    )
  }

  public renderSlides () {
    return (
      <div className='carousel__slide-container'>
        {this.props.items.map((item, index) => {
          return (
            <div key={`slide_${index}`} className='carousel__slide'>
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
