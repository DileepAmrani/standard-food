import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
 
class CountrySelector extends Component {
  constructor(props) {
    super(props)
    this.options = countryList().getData()
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
    console.log(value)
    this.props.onChange(value)
  }
 
  render() {
    return (
        <div style={{marginBottom: '10px'}}>
      <Select 
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
        />
        </div>
    )
  }
}

export default CountrySelector