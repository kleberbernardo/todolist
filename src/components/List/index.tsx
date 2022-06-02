import { FaList } from 'react-icons/fa';

import { CheckBox, Container, Item, Section } from './styles';

export function List() {
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
            <Item>
              <label>
                <CheckBox /> Call the dentist
              </label>
            </Item>
            <Item>
              <label>
                <CheckBox /> Call the dentist
              </label>
            </Item>
            <Item>
              <label>
                <CheckBox /> Call the dentist
              </label>
            </Item>
            <Item>
              <label>
                <CheckBox /> Call the dentist
              </label>
            </Item>
            <Item>
              <label>
                <CheckBox /> Call the dentist
              </label>
            </Item>
          </main>
          <footer>
            <button type="button">+</button>
          </footer>
        </Section>
      </Container>
    </>
  );
}
