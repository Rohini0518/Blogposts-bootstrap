import { Button, Card } from "react-bootstrap/";
import reacticon from "./assets/reacticon.png";

function BlogPosts(props) {
  return (
    <Card className="blogpost-container">
      <img className="blog-img" src={props.img} />
      <Card.Body>
        <div className="profile-details">
          <img className="react-icon" src={reacticon} />
          <div>
            <Card.Title>Games Turok</Card.Title>
            <Card.Text>April 22,2024</Card.Text>
          </div>
        </div>
        <Card.Title>
          A smile can boost your health by reducing stress and spreading joy.
        </Card.Title>
        <Button variant="outline-danger">
          <i class="fa fa-heart-o" aria-hidden="true" />
          <span className="span-gap">0</span>Likes
        </Button>
        <span className="span-gap">
          <Button variant="outline-success">
            <i class="fa fa-comment-o" aria-hidden="true" />
            <span className="span-gap">0</span>Comments
          </Button>
        </span>
      </Card.Body>
    </Card>
  );
}

export default BlogPosts;
