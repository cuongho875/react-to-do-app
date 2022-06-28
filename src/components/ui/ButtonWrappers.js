import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function ButtonWrappers(props) {
  return (
    <div className="button">
        <a href="#" className="addNew" onClick={props.actions['AddNew']}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></a>
        <a href="#" className="Search" onClick={props.actions['Search']} ><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
    </div>
  )
}
