import React from 'react'

const DeleteModal = ({selectedDataId, handleProductDelete, handleDataInputCancel}) => {
  return (
    <div className="modal" id="deleteModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
            <div className='w-full text-end'>        
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h3>Are you sure you want to delete?</h3>
            <button className='btn btn-danger' data-bs-dismiss="modal" onClick={() => handleProductDelete(selectedDataId)}>Yes</button>
            <button className='btn' data-bs-dismiss="modal" onClick={handleDataInputCancel}>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default DeleteModal