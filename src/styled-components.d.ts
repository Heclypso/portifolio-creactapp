// styled-components.d.ts
/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components'
import { Theme } from './themes/dark'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
