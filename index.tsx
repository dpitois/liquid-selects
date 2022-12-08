import { render } from "preact";
import Custom from "./src/component/Custom";
import CustomReact from "./src/component/CustomReact";

render(
    <div>
        <Custom />
        <CustomReact />
    </div>
    , document.getElementById("app"));
