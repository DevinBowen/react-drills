import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super()

        this.state = {
            userName: '',
            passWord: ''
        }
    }
    changeUser(input){
        this.setState({
          userName: input
        })
      }
    changePass(input){
        this.setState({
          passWord: input
        })
      }

    render() {
        return (
            <div>
            <input onChange={(e) => this.changeUser(e.target.value ) } />
            <input onChange={(e) => this.changePass(e.target.value ) } />
            <button onClick={(e) => alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)} >BUTTON</button>
            </div>
        )
    }


}