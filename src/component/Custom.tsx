import styles from "@emdgroup-liquid/liquid/dist/css/liquid.global.css?inline";

import { defineCustomElement as LdSelect } from "@emdgroup-liquid/liquid/dist/components/ld-select";
import { defineCustomElement as LdSelectPopper } from "@emdgroup-liquid/liquid/dist/components/ld-select-popper";
import { defineCustomElement as LdOption } from "@emdgroup-liquid/liquid/dist/components/ld-option";
import { defineCustomElement as LdOptionInternal } from "@emdgroup-liquid/liquid/dist/components/ld-option-internal";
LdSelect();
LdSelectPopper();
LdOption();
LdOptionInternal();

const Custom = () => {
  return (
    <>
      <style>
        {styles}
      </style>
      <ld-select filter={true} onInput={(e: any) => console.log(e)}>
        <ld-option>Option 1</ld-option>
        <ld-option>Option 2</ld-option>
      </ld-select>
    </>
  );
};

Custom.tagName = "cu-stom";

export default Custom;
