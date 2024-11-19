function SideMenu() {
  const sortByList = [
    { icon: "fa fa-clock-o", text: "Latest" },
    { icon: "fa fa-fire", text: "Hot" },
    { icon: "fa fa-star", text: "Best" },
  ];
  const navigations = [
    { icon: "fa fa-home", text: "Home" },
    { icon: "fa fa-user", text: "Profile" },
    { icon: "fa fa-pencil", text: "Make Post" },
    { icon: "fa fa-info-circle", text: "About" },
    { icon: "fa fa-video-camera", text: "Videos" },
    { icon: "fa fa-envelope", text: "Contact" },
  ];
  return (
    <div className="sidemenu-container">
      <p className="side-heading">Sort by :</p>
      <ul>
        {sortByList.map((item, index) => (
          <li key={index} className="sidelist-item">
            <i class={item.icon} aria-hidden="true" />
            <span className="span-gap">{item.text}</span>
          </li>
        ))}
      </ul>

      <p className="side-heading">Navigation :</p>
      <ul>
        {navigations.map((item, index) => (
          <li key={index} className="sidelist-item">
            <i class={item.icon} aria-hidden="true" />
            <span class="span-gap">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
