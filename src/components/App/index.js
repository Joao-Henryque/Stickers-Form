// Components
import { ThemeProvider } from 'styled-components';
import { Header } from '../Header';
import { Form } from '../Form';

// Styled-components
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Form />
      </Container>
    </ThemeProvider>
  );
}
