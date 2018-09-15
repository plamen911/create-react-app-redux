import React from 'react'
import { connect } from 'react-redux'

const searchOutput = props => {
  if (props.loading) {
    return <div>Loading...</div>
  }

  if (props.error) {
    return <div>{props.error}</div>
  }

  return <ul className='list-group mt-3'>
    {props.info && Object.keys(props.info).map((key, i) => (
      <li className='list-group-item' key={i}><strong>{key}:</strong> {props.info[key]}</li>
    ))}
  </ul>
}

const mapStateToProps = state => ({
  info: state.gitHubUser.info,
  loading: state.gitHubUser.loading,
  error: state.gitHubUser.error
})

export default connect(mapStateToProps)(searchOutput)
