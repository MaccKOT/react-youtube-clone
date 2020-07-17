import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleChange = (evt) => this.setState({ searchTerm: evt.target.value });

  handleSubmit = (evt) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    evt.preventDefault();
  };

  render() {
    return (
      <Paper elevation={3} style={{ padding: '25' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search..."
            type="search"
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
