// Assets
import Logo from '../../assets/Logo.svg';

// Styled-components
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
    </Container>
  );
}
