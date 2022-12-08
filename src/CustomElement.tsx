import register from "preact-custom-element";
import Custom from "./component/Custom";
import CustomReact from "./component/CustomReact";

register(
  Custom /* component */,
  undefined /* tag name*/,
  undefined /* observed properties*/,
  { shadow: true } /* render in a shadow dom to avoid style conflict */
);

register(
  CustomReact /* component */,
  undefined /* tag name*/,
  undefined /* observed properties*/,
  { shadow: true } /* render in a shadow dom to avoid style conflict */
);

register(
  CustomReact /* component */,
  "cu-stom-react-no-shadow" /* tag name*/,
  undefined /* observed properties*/,
  { shadow: false } /* render in a shadow dom to avoid style conflict */
);
