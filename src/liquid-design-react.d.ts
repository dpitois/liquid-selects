import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { Attributes } from 'preact' // or from 'vue'

type LiquidElements<T> = {
  [P in keyof T]?: T[P] &
  Omit<Attributes, 'className'> & {
    class?: string
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends LiquidElements<LocalJSX.IntrinsicElements> {}
  }

  // Required only when using React bindings
  interface Window {
    __LD_ASSET_PATH__?: string
  }
}
