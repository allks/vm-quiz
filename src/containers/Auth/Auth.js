import React, {Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {

  loginHandler = () => {

  }
  
  registerHandler = () => {
    
  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={classes.auth}>
        <div>
          <h2>Авторизация</h2>
          <form
            onSabmit={this.submitHandler}
            className={classes.authForm}
          >
            <input type="text" />
            <input type="text" />
            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}