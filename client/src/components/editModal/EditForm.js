import { Form, Button } from "react-bootstrap"
import {useState} from 'react';


function EditForm({user, handleEdit}){
const [name, setName] = useState(user.name);
const [email, setEmail] = useState(user.email);
const [address, setAddress] = useState(user.address);
const [phone, setPhone] = useState(user.phone);


const handleSubmit = (e) => {
e.preventDefault();
console.log(`inisde edit`);
fetch("http://localhost:5500/edit",
{
mode: 'cors',
method: 'POST',
headers: { 'Content-Type':'application/json' },
body: JSON.stringify({ _id:user._id, name, email, phone, address}),
})
.then((response)=> response.json())
.then(response => {
console.log(response);
handleEdit({ _id:user._id, name, email, phone, address})
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
         value={name}
         onChange={(e)=>
      setName(e.target.value)}
      required
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
         type="email"
         placeholder="Email *"
         name="email"
         value={email}
         onChange={(e)=>
      setEmail(e.target.value)}
      required
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
         as="textarea"
         placeholder="Address"
         rows={3}
         value={address}
         name="address"
         onChange={(e)=>
      setAddress(e.target.value)}
      />
   </Form.Group>
   <Form.Group>
      <Form.Control
         type="text"
         placeholder="Phone"
         value={phone}
         name="phone"
         onChange={(e)=>
      setPhone(e.target.value)}
      />
   </Form.Group>
   <Button variant="success" type="submit" block>
   Edit Employee
   </Button>
</Form>
)
}
export default EditForm;