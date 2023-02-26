import { Parallax } from "react-parallax";
import Cosmos from "../img/cosmos.jpg";
const ImageThree = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={Cosmos}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">How vast the universe truly is</span>
    </div>
  </Parallax>
);

export default ImageThree;
