import React, { Component } from 'react'

export default class DogForm extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
       
        state = {
            name: '',
            age: '',
            breed: ''
        }
    }



    handleSubmit = (event) => {
        let dog = {
            name: this.state.name,
            age: this.state.age,
            breed: this.state.breed
        }
        // html please dont do your thing
        event.preventDefault()
        this.props.addDog(dog)
        //@TODO : CLEAN UP INPUTS
        //==> ==> ==> ==> ==>  ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==>

    }

    handleOnChange = (event) => {

        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder="name" onChange={this.handleOnChange} value={this.state.name} />
                <input type='text' name='age' placeholder="age" onChange={this.handleOnChange} value={this.state.age} />
                <input type='text' name='breed' placeholder="breed" onChange={this.handleOnChange} value={this.state.breed} />
                <input type="Submit" />
            </form>
        )
    }
}
