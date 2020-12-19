import React from 'react';
import styled from 'styled-components';
import { Grid } from './Grid';
import { Clown } from '../types';
import { Avatar } from './Avatar';

const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

const ImageWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Header = styled.h2`
    text-align:center;
`;

export const Profile = ( clown: Clown ) => {
    const { image, name, neighboorhood, favorite, years } = clown;
    return (
        <Container>
            <ImageWrapper>
                <Avatar src={ image } size={ 300 } />
            </ImageWrapper>
            <Grid>
                <Header>{ name }</Header>
                <Header>{ neighboorhood }</Header>
                <Header>{ favorite }</Header>
                <Header>{ years }</Header>
            </Grid>
        </Container>
    );
};