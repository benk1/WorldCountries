import React from 'react'
const SortBy = ({sortByNameAsc,sortByNameDesc,sortByCapitalAsc,sortByCapitalDesc,sortedPopulationAsc,sortedPopulationDesc}) => {
  return ( 
   <div className='sortDiv'>
          <div>
          <button className="blue darken-5 waves-effect waves-light btn-large"><i onClick={sortByNameAsc} className="material-icons">arrow_upward</i>NAME<i onClick={sortByNameDesc} className="material-icons">arrow_downward</i></button>
             </div>
          <div>
          <button  className=" blue darken-5 waves-effect waves-light btn-large"><i onClick={sortByCapitalAsc} className="material-icons">arrow_upward</i>CAPITAL<i onClick={sortByCapitalDesc} className="material-icons">arrow_downward</i></button>
          </div>
          <div>
          <button className="blue darken-5 waves-effect waves-light btn-large"><i onClick={sortedPopulationAsc} className="material-icons">arrow_upward</i>POPULATION<i onClick={sortedPopulationDesc} className="material-icons">arrow_downward</i></button>
          </div>
        </div>
  );
}
 
export default SortBy;