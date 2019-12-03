import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from './Bands'

class BandsContainer extends Component {

  // addBand = newBand => {
  //   this.props.addBand(newBand)
  // }

  // renderBands = () => this.props.bands.map((band, id) => <Bands key={id} band={band.name} />)

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {/* {this.renderBands()} */}
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band => dispatch({ type: 'ADD_BAND',  band }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)