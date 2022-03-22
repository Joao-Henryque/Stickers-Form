import { useState } from 'react';

// Icons
import { FiLoader } from 'react-icons/fi';

// Contents
import { GroupForm } from '../GroupForm';
import { Footer } from '../Footer';
import { Modal } from '../Modal';

// Styled-components
import { Container } from './styles';
import { CheckBox, InputAddMinus } from '../Input';
import { TextArea } from '../TextArea';
import { ButtonAddMinus } from '../ButtonAddMinus';

export function Form() {
  // Handle CheckBox
  const [stickers, setStickers] = useState([]);

  const stickersList = ['React', 'Vue', 'Angular'];

  const handleCheckStickers = (target) => {
    const { checked, value } = target;

    if (checked) {
      setStickers([...stickers, value]);
    } else {
      const stickersFilter = stickers.filter((sticker) => sticker !== value);

      setStickers(stickersFilter);
    }
  };

  // Handle Stickers Quantity
  const [stickerQuantity, setStickerQuantity] = useState(0);

  const handleMinusStciker = () => {
    if (stickerQuantity !== 0) {
      setStickerQuantity((prevState) => prevState - 1);
    }
  };

  const handleAddStciker = () => {
    setStickerQuantity((prevState) => prevState + 1);
  };

  const handleChangeQuantity = (quantity) => {
    const newQuantity = Number(quantity);

    setStickerQuantity(newQuantity);
  };

  // Handle TextArea
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChangeTextArea = (text) => {
    setTextAreaValue(text);
  };

  // Check if the form is filled in
  const checkForm = stickers.length === 0 || stickerQuantity <= 0;

  // Handle Submit Infos
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    // cleaning up the last order options
    setStickers([]);
    setStickerQuantity(0);
    setTextAreaValue('');

    setShowModal(false);
  };

  return (
    <Container>
      <GroupForm title="Quais adesivos:">
        {stickersList.map((sticker) => (
          <div className="checkBox-container" key={sticker}>
            <CheckBox
              type="checkbox"
              id={sticker}
              value={sticker}
              checked={stickers.includes(sticker)}
              onChange={(({ target }) => handleCheckStickers(target))}
            />
            <label htmlFor={sticker}>{sticker}</label>
          </div>
        ))}
      </GroupForm>
      <GroupForm title="Quantos adesivos de cada?">
        <div className="stickerQuantity-container">
          <ButtonAddMinus type="button" onClick={handleMinusStciker}>-</ButtonAddMinus>
          <InputAddMinus
            type="text"
            value={stickerQuantity}
            onChange={(({ target }) => handleChangeQuantity(target.value))}
          />
          <ButtonAddMinus type="button" onClick={handleAddStciker}>+</ButtonAddMinus>
        </div>
      </GroupForm>
      <GroupForm title="Observações:">
        <TextArea
          placeholder="Alguma dúvida? recado?"
          rows="4"
          cols="50"
          value={textAreaValue}
          onChange={(({ target }) => handleChangeTextArea(target.value))}
        />
      </GroupForm>
      <Footer>
        <button
          type="submit"
          onClick={(event) => handleSubmitForm(event)}
          disabled={checkForm}
        >
          {loading ? <FiLoader className="loader-icon" size={20} /> : 'ENVIAR'}
        </button>
      </Footer>

      <Modal onClick={handleCloseModal} showModal={showModal}>
        <div className="order-data-container">
          <strong>Adesivo(s):</strong>
          <ul>
            {stickers.map((sticker) => (
              <li key={sticker}>{sticker}</li>
            ))}
          </ul>
        </div>
        <div className="order-data-container">
          <strong>Quantidade:</strong>
          <span>{stickerQuantity}</span>
        </div>
        <div className="order-data-container">
          <strong>Observacões:</strong>
          <p>
            {textAreaValue || '-'}
          </p>
        </div>
      </Modal>
    </Container>
  );
}
