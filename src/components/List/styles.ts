import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  background-color: #ffffff;
  width: 18.5rem;
  height: 28.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

  header {
    margin-top: 1rem;
    height: 2rem;
    padding-left: 1rem;
    display: flex;

    div {
      margin-left: 1rem;
      font-weight: bold;
      font-size: 1.25rem;
      color: var(--primary-color-dark);
    }
  }

  main {
    height: 20rem;
    color: #707070;
  }

  footer {
    text-align: center;
    margin-bottom: -2rem;

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      background-color: #ffba74;
      color: #ffffff;
      font-size: 2rem;
      font-weight: bold;
      box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
    }
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: var(--primary-color-dark);
  vertical-align: middle;
  margin-right: 0.5rem;
`;

export const Item = styled.div`
  padding-left: 1rem;
  margin-top: 0.5rem;
  vertical-align: middle;

  &:first-child {
    margin-top: 0;
  }
`;
