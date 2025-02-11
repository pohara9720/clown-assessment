import React from 'react';
import { Button } from './Button';
import styled from "styled-components";
import { StepProps } from '../types';

const WizardButtons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:32px;
`;
export const WizardStep = ( { wizard, children, last, onLast }: StepProps ): JSX.Element => {
    return (
        <div>
            {children }
            <WizardButtons>
                <Button onClick={ wizard?.prev }>Prev</Button>
                { !last && <Button primary onClick={ wizard?.next }>Next</Button> }
                { last && <Button onClick={ onLast } primary>Submit</Button> }
            </WizardButtons>
        </div>
    );
};
