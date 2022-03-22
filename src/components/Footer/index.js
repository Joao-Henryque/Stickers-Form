import propTypes from 'prop-types';

// Styled-components
import { Container } from './styles';

export function Footer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Footer.propTypes = {
  children: propTypes.node.isRequired,
};
