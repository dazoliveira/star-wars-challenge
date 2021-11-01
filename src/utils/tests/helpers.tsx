import { ThemeProvider } from "@material-ui/styles";
import { render, RenderResult } from '@testing-library/react'

import { globalTheme } from '../../globalStyles'

export const renderWithTheme = (children: React.ReactNode): RenderResult => (
    render(<ThemeProvider theme={globalTheme}>{children}</ThemeProvider>)
)

