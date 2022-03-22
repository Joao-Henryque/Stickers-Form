import propTypes from 'prop-types';

// Styled-components
import { Container } from './styles';

export function GroupForm({ children, title }) {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}

GroupForm.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
};
