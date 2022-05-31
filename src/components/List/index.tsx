import { FaThList } from 'react-icons/fa';

import { CheckBox, Container, Item, Section } from './styles';

export function List() {
  return (
    <>
      <Container>
        <Section>
          <header>
            <FaThList color="#9E73C8" size={30} />
            <div>To-do List</div>
          </header>
          <main>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
            </Item>
            <Item>
              <CheckBox /> Call the dentist
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
