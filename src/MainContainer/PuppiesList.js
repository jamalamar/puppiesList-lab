import React, { Component } from 'react'

export default class PuppieList extends Component {


    render() {
        const listPups = this.props.dogs.map((item, index) => {
            return (
                <li key={index}>
                    <h1>{item.name}</h1>
                    <button onClick={this.props.deleteDog.bind(null, index, item)}>Remove</button>
                    <button onClick={this.props.updateDog.bind(null, index, item)}>Update</button>
                </li>

            )
        })
        return (
            <ul>
                {listPups}
            </ul>
        )
    }
}