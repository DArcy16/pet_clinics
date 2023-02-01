import React from 'react'

const TabelRow = ({item, setSelectedDataId }) => {
  return (
    <tr>                    
      <td><input type="checkbox" /></td>
                            <td>{item.id}</td>
                            <td>{item.pet_name}</td>
                            {item.status === 'allergy'? 
                            <td><img src="src/images/allergy.png" alt="allergy" /></td> 
                            : 
                            <td><img src="src/images/picky eater.png" alt="picky" /></td> }       
                            <td>{item.pawrent}</td>
                            <td>{item.breed}</td>
                            <td>{item.gender}</td>
                            <td>{item.dob}</td>
                            <td>{item.ph_no}</td> 
                            <td>{item.address}</td>
                            <td>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="src/images/more.png" alt="more" />             
                                    </button>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><button className='add-btn' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setSelectedDataId(item.id)}> Edit </button></a></li>
                                    <li><a className="dropdown-item" href="#"><button className='add-btn' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setSelectedDataId(item.id)}> Delete </button></a></li>
                                    
                                    </ul>

                                </div>
                            </td>
                        </tr>
  )
}

export default TabelRow