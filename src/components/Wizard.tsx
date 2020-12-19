import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, prop, switchProp } from 'styled-tools';
import { grey, blue, red } from '../palette';
import { WizardProps } from '../types';

const Header = styled.div<{ headerBreakpoint: number; }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: ${ prop( 'headerBreakpoint' ) }px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const ProgressContainer = styled.div<{ headerBreakpoint: number; maxWidth: number; }>`
  margin: 0;
  max-width: ${ prop( 'maxWidth' ) }px;
  width: 100%;
  @media (min-width: ${ prop( 'headerBreakpoint' ) }px) {
    margin: 0 0 20px auto;
  }
`;

const ProgressSteps = styled.div<{ progressStepsWidth: number; }>`
  display: flex;
  ${ ifProp(
  'progressStepsWidth',
  css`
      max-width: ${ prop( 'progressStepsWidth' ) }px;
    `
) }
`;

const ProgressStep = styled.div<{ state: string; }>`
  flex: 1 0 auto;
  position: relative;

  &:last-child {
    width: 8px;
    flex-grow: 0;
  }

  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 5px;
      left: 10px;
      right: 0;
      height: 2px;

      ${ switchProp( 'state', {
  active: css`
          background: ${ grey };
        `,
  past: css`
          background-color: ${ blue };
        `,
  future: css`
          background: ${ grey };
        `,
} ) };
    }
  }
`;

const ProgressStepIndicator = styled.div<{ state: string; }>`
  height: 8px;
  width: 8px;
  flex: 1 0 auto;
  border-radius: 50%;
  border: solid 2px;

  ${ switchProp( 'state', {
  active: css`
      border-color: ${ blue };
    `,
  past: css`
      border-color: ${ blue };
      background-color: ${ blue };
    `,
  future: css`
      border-color: ${ grey };
    `,
} ) };
`;

const StepContent = styled.div`
  margin-top: 16px;
`;

const StepTitle = styled.div`
  font-size: 21px;
  font-weight: 900;
  margin-bottom: 16px;
`;

const Alert = styled.div`
  background-color: ${ red };
  color: white;
  padding: 16px;
  font-weight: bold;
  border-radius: 8px;
  max-width: 100%;
`;

const WizardContainer = styled.div``;

const calculateState = ( active: number, index: number ) => {
  if ( active === index ) {
    return 'active';
  }
  return active > index ? 'past' : 'future';
};

export const Wizard = ( {
  children: steps,
  progressStepsWidth,
  headerBreakpoint,
  showHeader,
  error
}: any ) => {
  const [ active, setActive ] = useState( 0 );

  if ( !steps || !steps.length ) {
    return null;
  }

  const activeComponent = steps[ active ];

  const { title } = activeComponent && activeComponent.props;

  const wizardCtrl = {
    prev: () => ( active === 0 ? null : setActive( active - 1 ) ),
    next: () => ( active === steps.length - 1 ? null : setActive( active + 1 ) ),
  };

  const renderWizardHeader = () => (
    <Header headerBreakpoint={ headerBreakpoint }>
      <StepTitle>{ title }</StepTitle>
      <ProgressContainer
        headerBreakpoint={ headerBreakpoint }
        maxWidth={ progressStepsWidth }>
        <ProgressSteps progressStepsWidth={ progressStepsWidth }>
          { steps.map( ( value: JSX.Element, index: number ): JSX.Element => {
            const state = calculateState( active, index );
            return (
              <ProgressStep key={ index } state={ state }>
                <ProgressStepIndicator state={ state } />
              </ProgressStep>
            );
          } ) }
        </ProgressSteps>
      </ProgressContainer>
    </Header>
  );


  return (
    <WizardContainer>
      {showHeader ? renderWizardHeader() : null }
      {error && <Alert>There is a problems in the form please go back and correct them before submitting</Alert> }
      <StepContent>
        { React.cloneElement( activeComponent as any, { wizard: wizardCtrl } ) }
      </StepContent>
    </WizardContainer>
  );
};



