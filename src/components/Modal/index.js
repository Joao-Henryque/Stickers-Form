import propTypes from 'prop-types';

// Styled-components
import { OverLay, Container, Footer } from './styles';

export function Modal({ children, onClick, showModal }) {
  return (
    <OverLay showModal={showModal}>
      <Container>
        <h1>
          Pedido realizado com
          <span> sucesso</span>
        </h1>
        {children}
        <Footer>
          <button type="button" onClick={onClick}>
            CLOSE
          </button>
        </Footer>
      </Container>
    </OverLay>
  );
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
  showModal: propTypes.bool.isRequired,
};
