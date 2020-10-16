import React, { Component } from 'react';
import CountryHeader from './CountryHeader';
class SortBy extends Component {

  columns = [
    {path: 'name', label: "NAME"},
    {path: 'capital', label: "CAPITAL"},
    {path: 'population', label: "POPULATION"}
  ]
  
  render() { 
    const {sortColumn,onSort} = this.props
    return ( 
      <div>
            <CountryHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
           </div>
     );
  }
}
 
 
export default SortBy;

