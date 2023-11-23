import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/card.css";

export default function AppCard() {
  return (
    <div className="crad">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
