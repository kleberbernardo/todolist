import { useState } from 'react';
import { FaList } from 'react-icons/fa';

import { ModalAddItemList } from '../Modal/AddItemList';
import {
  CheckBox,
  Container,
  Item,
  Section,
  Label,
  DivEmpty,
  Header,
  Main,
  Footer,
} from './styles';

interface IDataItems {
  id: number;
  label: string;
  checked: boolean;
}

export function List() {
  const [items, setItems] = useState<IDataItems[]>([]);

  const handleItemChecked = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleNewItem = (item: IDataItems) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const [isOpenNewItemModal, setIsOpenNewItemModal] = useState(false);
  const handleOpenNewItemModal = () => setIsOpenNewItemModal(true);
  const handleCloseNewItemModal = () => setIsOpenNewItemModal(false);

  return (
    <>
      <Container>
        <Section>
          <Header>
            <div>
              <FaList color="#9E6B8E" size={20} />
            </div>
            <div>To-do List</div>
          </Header>
          <Main>
            <DivEmpty isEmpty={items.length === 0}>Vazio...</DivEmpty>
            {items.map((item) => (
              <Item key={item.id}>
                <Label isChecked={item.checked}>
                  <CheckBox
                    checked={item.checked}
                    onClick={() => handleItemChecked(item.id)}
                  />{' '}
                  {item.label}
                </Label>
              </Item>
            ))}
          </Main>
          <Footer>
            <button type="button" onClick={handleOpenNewItemModal}>
              +
            </button>
          </Footer>
        </Section>
      </Container>
      <ModalAddItemList
        isOpen={isOpenNewItemModal}
        onSaveItem={handleNewItem}
        onRequestClose={handleCloseNewItemModal}
      />
    </>
  );
}
