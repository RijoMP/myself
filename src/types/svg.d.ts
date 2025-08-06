// Support importing SVGs as React components with ?svgr
declare module '*.svg?svgr' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
