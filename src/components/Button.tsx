import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { blue, white, grey } from '../palette';

export const Button = styled.div<{ primary?: boolean; }>`
    border-radius:8px;
    padding:10px 20px;
    cursor:pointer;
    ${ ifProp(
    'primary',
    css`
        background-color: ${ blue };
        color: ${ white };
    `,
    css`
        background-color: ${ grey };
        color: black;
    `
) }
  
`;