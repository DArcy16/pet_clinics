import React from 'react'
import TabelRow from './TabelRow'

const Tabel = ({patientLists , setSelectedDataId }) => {
  
  

  return (
     <table className="table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>ID</th>
                <th>Pet Name</th>
                <th>Status</th>
                <th>Pawrent</th>
                <th>Breed</th>
                <th>Gender</th>
                <th>Date of birth</th>
                <th>Contact ph no.</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    patientLists.map(item => (
                        <TabelRow item = {item} key={item.id} setSelectedDataId={setSelectedDataId}/>
                    ))
                }
            </tbody>
          </table>
  )
}

export default Tabel