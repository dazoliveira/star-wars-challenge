import { ThemeProvider } from "@material-ui/styles";
import { render, RenderResult } from '@testing-library/react'
import { store } from "app/store";
import { Provider } from 'react-redux';
import { globalTheme } from "../../globalStyles";


export const renderWithTheme = (children: React.ReactNode): RenderResult => (
    render(
        <Provider store={store}>
            <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
        </Provider>      
    )
)

