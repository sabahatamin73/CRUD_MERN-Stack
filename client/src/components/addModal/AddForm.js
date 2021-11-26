import { Form, Button } from "react-bootstrap"
import {useState} from 'react';


const AddForm = ({handleCreate}) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
fetch("http://localhost:5500/add",
{
mode: 'cors',
method: 'POST',
headers: { 'Content-Type':'application/json' },
body: JSON.stringify({ name, email, phone, address}),
})
.then((response) => response.json())
.then(response => {
console.log(response);
handleCreate(response.user);
})
.catch(err => console.log(err));
}


return (
<Form onSubmit={handleSubmit}>
   <Form.Group>
      <Form.Control
      type="text"
      placeholder="Name *"
      name="name"
      onChange = { (e) => setName(e.target.value)}
      required
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
      type="email"
      placeholder="Email *"
      name="email"
      onChange = { (e) => setEmail(e.target.value)}
      required
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
      as="textarea"
      placeholder="Address"
      rows={3}
      name="address"
      onChange = { (e) => setAddress(e.target.value)}
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
      type="text"
      placeholder="Phone"
      name="phone"
      onChange = { (e) => setPhone(e.target.value)}
      />
   </Form.Group>
   <Button variant="success" type="submit" block>
   Add New Employee
   </Button>
</Form>
)
}

export default AddForm;