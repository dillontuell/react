import { Parallax } from "react-parallax";
import Galaxy from "../img/galaxy.jpg";

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Galaxy}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">The wonders of our own galaxy</span>
    </div>
  </Parallax>
);

export default ImageTwo;
