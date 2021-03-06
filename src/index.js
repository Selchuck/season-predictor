import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        latitude: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }));
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error Message: {this.state.errorMessage}</div>;
        } if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={ this.state.latitude} />;
        } else {
            return <Spinner message="Please accept location request" />;
        }
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);

export default App;