// https://github.com/supasate/connected-react-router/blob/master/examples/basic/src/components/Counter.js
import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../store/actions'

const home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={() => props.increment(5)} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={() => props.incrementAsync(5)} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

home.propTypes = {
  count: PropTypes.number.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(home)
