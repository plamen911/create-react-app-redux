import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'

class SearchControl extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username' className='control-label'>Username</label>
          <input type='text'
                 id='username'
                 name='username'
                 placeholder='GitHub Username...'
                 value={this.state.username}
                 onChange={this.handleChange}
                 disabled={this.props.loading}
                 className='form-control'/>
        </div>
        <button type='submit'
                className='btn btn-primary'
                disabled={this.props.loading}
        >{this.props.loading ? 'Please wait...' : 'Display Bio'}</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.gitHubUser.loading
})

const mapDispatchToProps = dispatch => ({
  onSubmit: username => dispatch(actionCreators.getGitHubUserInfo(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl)
