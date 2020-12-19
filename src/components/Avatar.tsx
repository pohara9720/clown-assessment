import React from 'react';
import styled, { css } from "styled-components";
import { prop, ifProp } from 'styled-tools';
export const Avatar = styled.div<{ src: string; rounded?: boolean; size: number; }>`
    background-image: url(${ prop( 'src' ) });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height:${ prop( 'size' ) }px;
    width:${ prop( 'size' ) }px;
    ${ ifProp( 'rounded', css`
        border-radius:50%;
    `, css`
        border-radius:8px;
    `
) };
`;