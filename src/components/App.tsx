import * as React from 'react'
import MediaQuery from 'react-responsive'
import { ScaleLoader } from 'react-spinners'

import './App.css'

import BEMHelperFactory from '../library/bem-helper'
import Carousel, { ICarouselItem } from './Carousel'

const BEMHelper = BEMHelperFactory('app')

interface IAppState {
  error: string,
  loading: boolean
  items: ICarouselItem[]
}

class App extends React.Component<{}, IAppState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      error: '',
      items: [],
      loading: true
    }
  }

  public componentDidMount () {
    // todo this should be moved into a library and the API key should be retrieved from configuration
    fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=fantasy&image_type=photo')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.hits.map((i: any) => ({
            imageUrl: i.webformatURL,
            likes: i.likes,
            user: i.user
          })),
          loading: false
        })
      }, (error) => {
        this.setState({
          error
        })
      })
  }

  public render () {
    return (
      <MediaQuery
        maxDeviceWidth={768}>
        {(matches: boolean) => {
          return <div {...BEMHelper()}>
            <header {...BEMHelper('header')}>
              <h1>Carousel Test</h1>
            </header>
            {this.state.error && <span>Error: {this.state.error}</span>}
            {this.state.loading
            ? <ScaleLoader
                {...BEMHelper('spinner')}
                height={30}
                width={30}
                color={'#36D7B7'}
              />
            : <Carousel
                items={this.state.items}
                isSmallScreen={matches}
              />
            }
          </div>
        }
      }
      </MediaQuery>
    )
  }
}

export default App
