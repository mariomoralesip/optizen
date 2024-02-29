import Form from 'react-bootstrap/Form';

export function Input(props){
return <>
<Form.Label htmlFor="inputPassword5">{props.label}</Form.Label>
<Form.Control
    placeholder={props.placeholder || ''}
  type={props.type || 'text'}
/>
</>
}