import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fakeLogin } from '../../api/service'
import * as actionCreators from '../../store/actions'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin(e) {
    e.preventDefault()
    this.setState({loading: true})
    fakeLogin(this.state.email, this.state.password)
      .then(res => {
        this.setState({loading: false})
        this.props.onLoggedIn(res.email)
      })
      .catch(err => {
        this.setState({loading: false})
        console.log(err)
      })
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.onLoggedOut()
  }

  render() {
    return (
      <div>
        {!this.props.isAuthed ? (
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="control-label">E-mail</label>
              <input type="text"
                     id="email"
                     name="email"
                     className="form-control"
                     onChange={this.handleChange}
                     disabled={this.state.loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password"
                     id="password"
                     name="password"
                     className="form-control"
                     onChange={this.handleChange}
                     disabled={this.state.loading}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.loading}
            >{this.state.loading ? 'Please wait...' : 'Login'}</button>
          </form>
        ) : (
          <div>
            <p>Hello, {this.props.email}</p>
            <button
                className="btn btn-danger"
                onClick={this.handleLogout}
            >Logout</button>
          </div>
        )}
      </div>

    )
  }
}

Login.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
  onLoggedOut: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthed: state.auth.isAuthed,
  email: state.auth.email
})

const mapDispatchToProps = dispatch => ({
  onLoggedIn: email => dispatch(actionCreators.loggedIn(email)),
  onLoggedOut: () => dispatch(actionCreators.loggedOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
