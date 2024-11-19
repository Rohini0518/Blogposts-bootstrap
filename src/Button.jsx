import Button from "react-bootstrap/Button";

function NavButton(props) {
  return <Button variant="light">{props.action}</Button>;
}

export default NavButton;
