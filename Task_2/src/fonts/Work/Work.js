import React, { Component } from 'react';
import Search from '../../components/Grid/Search';
import Grid from '../../components/Grid/Grid';
import Header from '../../components/Header/Header';
import "./Work.css";

class Work extends Component {

    render() {
        const filteredRobots = this.state.valve.filter(valve => {
            return valve.first_name.toLowerCase().includes(this.state.searchArea.toLowerCase());
        })

        if (this.state.valve.length === 0 && this.state.isButtonClicked === false) {
            return (
                <>
                    <Header onButtonSubmit={this.onButtonSubmit} />
                    <p className="message">Click on the <u>" GET USERS "</u> Button to view result.</p>
                    <p className="footer">✨✨Made by Rutik Wagh✨✨</p>
                </>
            );
        }

        else if (this.state.valve.length === 0) {
            return (
                <>
                    <Header onButtonSubmit={this.onButtonSubmit} />
                    <div class="hourglass"></div>
                </>
            );
        }

        else {
            return (
                <>
                    <div>
                        <h1 className="heading">LETS GROW MORE USER DATA</h1>
                        <Search searchChange={this.onSearchChange} />
                        <div className="card-styles">
                            <Grid valve={filteredRobots} />
                        </div>
                        <p className="footer">✨✨Made by Rutik Wagh ✨✨</p>
                    </div>
                </>
            );
        }
    }

    constructor() {
        super()
        this.state = {
            valve: [],
            searchArea: '',
            isButtonClicked: false
        }
    }

    onButtonSubmit = () => {
        this.setState({ isButtonClicked: !this.isButtonClicked })
        const timer = setTimeout(() => {

            fetch('https://reqres.in/api/users?page=2').then(response => {
                return response.json();
            })
                .then(users => {
                    this.setState({ valve: users.data })
                });
        }, 3000);
        return () => clearTimeout(timer);
    }
    onSearchChange = (event) => {
        this.setState({ searchArea: event.target.value })
    }
}

export default Work;