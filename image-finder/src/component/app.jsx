import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';
import PhotoList from './PhotoList';

class App extends React.Component {
state = { images: [] };

onSearchSubmit = async (entry) => {
    const response = await axios.get(
    `https://pixabay.com/api/?key=21823917-055f54577f53afd5b79052b01&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
};
render() {
    return (
    <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <PhotoList images={this.state.images} />
    </div>
    );
}
}
export default App;
