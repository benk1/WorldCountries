import React, { Component } from 'react'
class CountryHeader extends Component {
  
  raiseSort = (path) =>{
    const sortColumn = {...this.props.sortColumn}
    if(sortColumn.path === path)
    sortColumn.order = (sortColumn.order ==='asc') ? 'desc': 'asc'
    else{
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn)
  }

  renderSortIcon=(column) =>{
    const {sortColumn} = this.props
    if(column.path !== sortColumn.path) return null
    if(sortColumn.order === 'asc') return <i className="material-icons">arrow_upward</i>
    return <i className="material-icons">arrow_downward</i>
  }
  render() { 
    return (
      
        <div className='sortDiv'>
          
        {this.props.columns.map(column => <button key={column.path} className="blue darken-5 waves-effect waves-light btn-large" onClick={() =>this.raiseSort(column.path)}>{column.label}{this.renderSortIcon(column)}</button> )}
          
        </div>
      
    );
  }
}
 
export default CountryHeader;