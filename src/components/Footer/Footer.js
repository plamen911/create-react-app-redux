import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Footer = props => (
  <footer className="footer text-center">
    <hr/>
    <span className="text-muted">{props.isAuthed ? 'Logged-in as: ' + props.email : 'Not logged-in'}</span>
  </footer>
)

Footer.propTypes = {
  isAuthed: PropTypes.bool,
  email: PropTypes.string
}

const mapStateToProps = state => ({
  isAuthed: state.auth.isAuthed,
  email: state.auth.email
})

export default connect(mapStateToProps)(Footer)
