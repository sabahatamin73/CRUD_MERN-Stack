import './AddModal.css';
import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import AddForm from '../addModal/AddForm';


function AddModal({handleCreate}){
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);


return (
<div>
   <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button> 
   <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
         <Modal.Title>
            Add Employee
         </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <AddForm handleCreate = {handleCreate}/>
      </Modal.Body>
      <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
         Close Button
         </Button>
      </Modal.Footer>
   </Modal>
</div>
)
}
export default AddModal;