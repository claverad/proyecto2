import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser as addUserCreator } from '../../redux/users/thunks'

const RegisterContainer = props => {
  const {
    loading,
    addUser,
    error
  } = props

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
  })

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addUser(values)
  }

  return (
    <div className="d-flex justify-content-center">
      <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
      <br></br>
        <h1 className="h3 mb-3 font-weight-normal">Registro de usuarios</h1>
        <label className="sr-only">Nombre:</label>
        <div className="col-md-14 mb-3">
        <input
          type="text"
          name='name'
          required
          className="form-control"
          placeholder="nombre"
          autofocus
          value={values['name']}
          onChange={handleChange}
        />
        </div>
        <div className="col-md-14 mb-3">
        <input
          type="email"
          name='email'
          className="form-control"
          required
          placeholder='email'
          value={values['email']}
          onChange={handleChange}
        />
        </div>
        <div className="col-md-14 mb-3">
        <input
          type="password"
          name='password'
          className="form-control"
          placeholder='password'
          value={values['password']}
          onChange={handleChange}
        />
        </div>
        <br></br>
        {error}
        {!loading && (
          <button type='submit' className="btn btn-lg btn-primary btn-block">
            Registrar
          </button>
        )}
      
      
      </form>
    </div>
  )
}

const msp = state => {
  const {
    loading,
    error
  } = state.users

  return {
    loading,
    error
  }
}

const mdp = {
  addUser: addUserCreator
}

export default connect(msp, mdp)(RegisterContainer)
