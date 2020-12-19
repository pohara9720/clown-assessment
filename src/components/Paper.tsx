import React from 'react';
import styled from "styled-components";
import { white, grey } from '../palette';

export const Paper = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: ${ white };
  box-shadow: 0 5px 7px 0 ${ grey };
`;