import React from 'react';
import styled from 'styled-components';
import { white, grey, blue } from '../palette';
import { InputProps } from '../types';

const InputComponent = styled.input`
  background-color: ${ white };
  padding: 4px;
  width: 100%;
  font-size:14px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px;
  border-color: ${ grey };
  &:hover {
    background-color: ${ white };
  }

  &:focus {
    outline: none;
    background-color: ${ white };
    border-color: ${ blue };
  }

  &::placeholder {
    color: ${ grey };
  }
`;

const Container = styled.div`
  display:flex;
  flex-direction:column
`;

export const Input = ( { label, name, setter, ...rest }: InputProps ) => {

  const onChange = ( e: any, name: string ) => {
    setter( ( state: any ) => ( {
      ...state,
      [ name ]: e.target.value
    } ) );
  };

  return (
    <Container>
      <label>{ label }</label>
      <InputComponent name={ name } onChange={ ( e: any ) => onChange( e, name ) } { ...rest } />
    </Container>
  );
};