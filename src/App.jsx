import "./App.css";
import BlogPosts from "./BlogPosts";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import systempic from "./assets/systempic.png";
import godavaribridge from "./assets/godavaribridge.jpg";
import LatestUpdates from "./LatestUpdates";

function App() {
  return (
    <div>
      <NavBar />
      <div className="blog-section">
        <SideMenu />
        <div>
          <BlogPosts img={systempic} />
          <BlogPosts img={godavaribridge} />
        </div>
        <LatestUpdates />
      </div>
    </div>
  );
}

export default App;
