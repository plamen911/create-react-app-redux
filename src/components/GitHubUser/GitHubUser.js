import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actions'

import SearchControl from './SearchControl'
import SearchOutput from './SearchOutput'

class GitHubUser extends Component {
  render () {
    return (
      <div>
        <SearchControl
          username={this.props.username}
          onSubmit={this.props.onSubmit}
          loading={this.props.loading}
        />
        <SearchOutput
          info={this.props.info}
          loading={this.props.loading}
          error={this.props.error}
        />
      </div>
    )
  }
}

GitHubUser.propTypes = {
  username: PropTypes.string,
  info: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  username: state.gitHubUser.username,
  info: state.gitHubUser.info,
  loading: state.gitHubUser.loading,
  error: state.gitHubUser.error
})

const mapDispatchToProps = dispatch => ({
  onSubmit: username => dispatch(actionCreators.getGitHubUserInfo(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(GitHubUser)
