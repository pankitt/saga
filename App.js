import React, { Component } from 'react';
import {connect} from "react-redux";
import { fetchDog } from './actions'

class App extends Component {
    render () {
        const { url, loading, error } = this.props;

        return (
            <div>
                <button onClick={() => this.props.fetchDog()}>Show Dog</button>
                {loading
                    ? <p>Loading...</p>
                    : error
                        ? <p>Error, try again</p>
                        : <p><img src={url}/></p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};
const mapDispatchToProps = {
    fetchDog
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
