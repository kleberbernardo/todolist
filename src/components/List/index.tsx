import { useState } from 'react';
import { FaList } from 'react-icons/fa';

import { CheckBox, Container, Item, Section, Label } from './styles';

interface IDataItems {
  id: number;
  label: string;
  checked: boolean;
}

export function List() {
  const [items, setItems] = useState<IDataItems[]>([
    {
      id: 1,
      label: 'Item 1',
      checked: false,
    },
    {
      id: 2,
      label: 'Item 2',
      checked: false,
    },
    {
      id: 3,
      label: 'Item 3',
      checked: true,
    },
  ]);

  const handleItemChecked = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <>
      <Container>
        <Section>
          <header>
            <div>
              <FaList color="#9E6B8E" size={20} />
            </div>
            <div>To-do List</div>
          </header>
          <main>
            {items.map((item) => (
              <Item key={item.id}>
                <Label isChecked={item.checked}>
                  <CheckBox onClick={() => handleItemChecked(item.id)} />{' '}
                  {item.label}
                </Label>
              </Item>
            ))}
          </main>
          <footer>
            <button type="button">+</button>
          </footer>
        </Section>
      </Container>
    </>
  );
}
