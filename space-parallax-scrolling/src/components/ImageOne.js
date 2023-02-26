import { Parallax } from "react-parallax";
import Satellite from "../img/satellite.jpg";

const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Satellite}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">View from space</span>
    </div>
  </Parallax>
);

export default ImageOne;
