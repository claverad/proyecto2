import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login as loginCreator } from '../../redux/users/thunks'

const LoginContainer = props => {
  const {
    login,
    error,
    loading
  } = props

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    login(values.email, values.password)
  }

  return (
    
    <div className="d-flex justify-content-center">
    
      <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
      <br></br>
        <h1 className="h3 mb-4 font-weight-normal">Bienvenido!</h1>
        
        <div className="col-md-14 mb-3">
          <label className="sr-only">Email address/></label>
          <input
          type="email"
          required
          name='email'
          className="form-control"
          placeholder="Email address"
          value={values['']}
          onChange={handleChange}
          />
        </div>
        <div className="col-md-14 mb-3">
          <label className="sr-only">Password</label>
          <input
          type="password"
          name='password'
          className="form-control"
          placeholder="Password"
          required
          value={values['']}
          onChange={handleChange}
          />
        </div>
        <label>
          <input type="checkbox" value="remember-me" /> Recordar
        </label>
        <br></br>
        {error}
        
        
        {!loading && <button type='submit'className="btn btn-lg btn-primary btn-block">Login</button>}

        <Link to='/register'>Registrarse</Link>
      </form>

      
    </div>
    )
}

const mapStateToProps = state => {
  const {
    loading,
    error
  } = state.users

  return {
    loading,
    error
  }
}

const mapDispatchToProps = {
  login: loginCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
