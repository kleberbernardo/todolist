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
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

  header {
    height: 2rem;
    display: flex;

    div {
      font-size: 1rem;
      width: 50%;
      height: 4rem;

      &:first-child {
        border-top-left-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:last-child {
        background-color: var(--color-gray-200);
        border-left: 1px solid var(--color-gray-300);
        border-bottom: 1px solid var(--color-gray-300);
        color: var(--color-gray-500);
        border-top-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
      }
    }
  }

  main {
    margin: 0 1rem 0 1rem;
    height: 20rem;
    color: var(--color-gray-900);
    overflow: auto;

    label {
      cursor: pointer;
    }
  }

  footer {
    margin: 0 1rem 0 1rem;
    text-align: center;
    margin-bottom: -2rem;

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      background-color: var(--color-purple-900);
      color: #ffffff;
      font-size: 2rem;
      font-weight: bold;
      box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
      transition: filter 0.3s;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: var(--color-purple-900);
  vertical-align: middle;
  margin-right: 0.5rem;
`;

export const Item = styled.div`
  padding-left: 0.7rem;
  margin-top: 1.25rem;
  vertical-align: middle;

  &:first-child {
    margin-top: 1.5rem;
  }
`;
