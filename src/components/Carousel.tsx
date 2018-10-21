import * as React from 'react'

import './Carousel.css'

import BEMHelperFactory from '../library/bem-helper'

export interface ICarouselItem {
  imageUrl: URL,
  user: string,
  likes: number
}

interface IProps {
  items: ICarouselItem[],
  isSmallScreen: boolean
}

interface ICarouselState {
  selectedIndex: number
}

const BEMHelper = BEMHelperFactory('carousel')

export default class Carousel extends React.Component<IProps, ICarouselState> {
  constructor (props: IProps) {
    super(props)
    this.renderSlides = this.renderSlides.bind(this)
    this.renderPreviousAndNextButtons = this.renderPreviousAndNextButtons.bind(this)
    this.calcPreviousIndex = this.calcPreviousIndex.bind(this)
    this.calcNextIndex = this.calcNextIndex.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
    this.onNext = this.onNext.bind(this)
    this.state = {
      selectedIndex: 0
    }
  }

  public render () {
    return (
      <div {...BEMHelper()}>
        {this.renderSlides()}
        {!this.props.isSmallScreen && this.renderPreviousAndNextButtons()}
      </div>
    )
  }

  public renderSlides () {
    const slidesToShow = [this.calcPreviousIndex(), this.state.selectedIndex, this.calcNextIndex()]
    return (
      <div {...BEMHelper('slide-container')}>
        {slidesToShow.map(index => {
          const item = this.props.items[index]
          return (
            <div
              key={`slide_${index}`}
              data-index={index}
              {...BEMHelper('slide', index === this.state.selectedIndex ? ['selected'] : [])}
            >
              <img src={item.imageUrl.toString()} alt={item.user} />
              <div {...BEMHelper('slide-label')}>
                <span
                  {...BEMHelper('slide-user')}
                >User: {item.user}</span>
                <span
                  {...BEMHelper('slide-likes')}
                >Likes: {item.likes}</span>
              </div>
            </div>
          )
        })}
        {this.props.isSmallScreen && this.renderPreviousAndNextButtons()}
      </div>
    )
  }

  public renderPreviousAndNextButtons () {
    return (
      <>
        <button
          {...BEMHelper('btn', ['previous'])}
          onClick={this.onPrevious}
        >Previous
        </button>
        <button
          {...BEMHelper('btn', ['next'])}
          onClick={this.onNext}
        >Next
        </button>
      </>
    )
  }

  private calcPreviousIndex () {
    return this.state.selectedIndex === 0
      ? this.props.items.length - 1
      : this.state.selectedIndex - 1
  }

  private onPrevious () {
    const newIndex = this.calcPreviousIndex()

    this.setState({
      selectedIndex: newIndex
    })
  }

  private calcNextIndex () {
    return this.state.selectedIndex === this.props.items.length - 1
      ? 0
      : this.state.selectedIndex + 1
  }

  private onNext () {
    const newIndex = this.calcNextIndex()

    this.setState({
      selectedIndex: newIndex
    })
  }
}
