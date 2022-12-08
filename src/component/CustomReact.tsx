import styles from "@emdgroup-liquid/liquid/dist/css/liquid.global.css?inline";

import { LdSelect, LdOption } from "@emdgroup-liquid/liquid/dist/react";

const CustomReact = () => {
  return (
    <>
      <style>
        {styles}
      </style>
      <LdSelect filter={true} onInput={(e: any) => console.log(e)}>
        <LdOption>Option 1</LdOption>
        <LdOption>Option 2</LdOption>
      </LdSelect>
    </>
  );
};

CustomReact.tagName = "cu-stom-react";

export default CustomReact;
