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
  height: 16rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: var(--color-purple-900);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 40%;

  div:first-child {
    width: 100%;
    text-align: right;
    padding-right: 0.5rem;
    margin-top: -0.75rem;

    button {
      cursor: pointer;
      background-color: transparent;
    }
  }

  div:last-child {
    margin-top: -0.25rem;
  }
`;

export const Main = styled.main`
  background-color: #ffffff;
  height: 60%;
  padding: 1rem;
  text-align: center;
`;

export const Form = styled.form`
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-gray-500);
    color: var(--color-gray-900);
    margin-bottom: 0.9rem;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--color-purple-900);
    color: #ffffff;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
