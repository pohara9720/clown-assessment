import React from 'react';
import styled from 'styled-components';
import { Paper } from './Paper';
import { Grid } from './Grid';
import { Clown } from '../types';
import { Avatar } from './Avatar';

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;

const Gutter = styled.div`
    margin-bottom:16px;
    padding:32px;
`;

export const ListItem = ( clown: Clown ) => {
    const { image, name, neighboorhood, years, favorite } = clown;
    return (
        <Gutter>
            <Paper>
                <Container>
                    <Avatar src={ image } rounded size={ 200 } />
                    <Grid>
                        <h3>{ name }</h3>
                        <h3>{ neighboorhood }</h3>
                        <h3>{ years }</h3>
                        <h3>{ favorite }</h3>
                    </Grid>
                </Container>
            </Paper>
        </Gutter>
    );
};