import ListGroup from "react-bootstrap/ListGroup";

function LatestUpdates() {
  const texts = [
    "The art of appreciating life's blessings",
    "Joy: The pure delight of being alive.",
    "Morbi leo risus",
  ];
  return (
    <div className="latest-container">
      <p className="text-bold">Latest Updates : </p>
      <ListGroup>
        {texts.map((text, index) => (
          <ListGroup.Item key={index}>{text}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default LatestUpdates;
