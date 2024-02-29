import { Card, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function Section(props) {
  return (
    <>
     <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Card style={{ width: '100%' }}>
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}