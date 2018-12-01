import { dark as baseTheme } from "mdx-deck/themes"

import okaidia from "react-syntax-highlighter/styles/prism/okaidia"
import prismTypescript from "react-syntax-highlighter/languages/prism/typescript"

export const theme = {
  ...baseTheme,
  prism: {
    style: okaidia,
    languages: {
      typescript: prismTypescript,
    },
  },
}
