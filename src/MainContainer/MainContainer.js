import React, { Component } from 'react'
import DogForm from './DogForm'
import PuppiesList from './PuppiesList'

export default class MainContainer extends Component {

    state = {
        dogs: []
    }


    // ADD DOG
    addDog = (dog) => {
        let newDogs = this.state.dogs
        newDogs.push(dog)
        this.setState({
            dogs: newDogs
        })
    }



    //@TODO : DELETE A DOG 
        deleteDog = (index) => {
            this.state.dogs.splice(index, 1)
        }

    //@TODO : UPDATE A DOG
        updateDog = (index) => {
            let unpdateDogs = this.state.dogs

            let dog = {
                name: this.textInputName.value,
                age: this.textInputAge.value,
                breed: this.textInputBreed.value
            }
            unpdateDogs[index] = dog;

            this.setState({
                dogs: unpdateDogs
            })
        }

    render() {

        return (
            <div>
                <h1>Helloooo {this.props.username}</h1>
                <div className="list-wrapper">
                    <ul className="list">
                        <PuppiesList deleteDog={this.deleteDog} dogs={this.state.dogs} />
                    </ul>
                </div>
                <DogForm 
                addDog={this.addDog}
                updateDog={this.updateDog}
                inputRefName={(inputName) => this.textInputName = inputName}
                inputRefAge={(inputAge) => this.textInputAge = inputAge}
                inputRefBreed={(inputRefBreed) => this.textInputBreed = inputBreed 
                />
            </div >
        )
    }

}
