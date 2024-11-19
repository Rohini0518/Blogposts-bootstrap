import NavButton from "./Button";

function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <h2>
          <i class="fa fa-address-card" aria-hidden="true" />
          My Blog
        </h2>
      </div>
      <div>
        <NavButton action="Log In" />
        <span className="span-gap" />
        <NavButton action="Create Account" />
      </div>
    </div>
  );
}

export default NavBar;
