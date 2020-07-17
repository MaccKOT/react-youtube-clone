import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
            placeholder="Search..."
            type="search"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
