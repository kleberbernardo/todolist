import { FormEvent, useState } from 'react';
import { FaCheckDouble, FaRegWindowClose } from 'react-icons/fa';
import Modal from 'react-modal';

import { Container, Form, Header, Main, Section } from './styles';

Modal.setAppElement('#root');

interface IDataItems {
  id: number;
  label: string;
  checked: boolean;
}

interface IPropsModal {
  isOpen: boolean;
  onRequestClose: () => void;
  onSaveItem: (data: IDataItems) => void;
}
export function ModalAddItemList({
  isOpen,
  onSaveItem,
  onRequestClose,
}: IPropsModal) {
  const [item, setItem] = useState('');

  const handleSaveItem = (event: FormEvent) => {
    event.preventDefault();

    if (item.trim()) {
      onSaveItem({
        id: Math.random(),
        label: item,
        checked: false,
      });
      setItem('');
      onRequestClose();
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        <Container>
          <Section>
            <Header>
              <div>
                <button onClick={onRequestClose}>
                  <FaRegWindowClose color="#ffffff" size={20} />
                </button>
              </div>
              <div>
                <FaCheckDouble color="#ffffff" size={50} />
              </div>
            </Header>
            <Main>
              <Form onSubmit={handleSaveItem}>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Adicionar novo item..."
                  />
                </div>
                <div>
                  <button type="submit">Salvar</button>
                </div>
              </Form>
            </Main>
          </Section>
        </Container>
      </Modal>
    </div>
  );
}
