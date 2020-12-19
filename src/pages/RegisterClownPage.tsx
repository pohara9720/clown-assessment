import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Wizard } from '../components/Wizard';
import { WizardStep } from '../components/WizardStep';
import { Paper } from '../components/Paper';
import { Grid } from '../components/Grid';
import { ImageUploader } from '../components/ImageUploader';
import { Input } from '../components/Input';
import { Profile } from '../components/Profile';
import { useHistory } from "react-router-dom";
import { post } from '../helpers';
import { Clown } from '../types';


export const RegisterClownPage = () => {
    const [ values, setValues ] = useState( {} );
    const history = useHistory();
    const onLast = () => {
        history.push( '/clowns' );
        post( values );
    };
    const clown = values as Clown;
    return (
        <Container>
            <Wizard headerBreakpoint={ 600 } progressStepsWidth={ 635 } showHeader>
                <WizardStep title='Basic Information'>
                    <Paper>
                        <Grid>
                            <Input name='name' label='Clown Name' setter={ setValues } />
                            <Input name='years' label='Years Active' setter={ setValues } />
                            <Input name='favorite' label='Favorite Clown' setter={ setValues } />
                            <Input name='neighboorhood' label='Neighboorhood' setter={ setValues } />
                        </Grid>
                    </Paper>
                </WizardStep>
                <WizardStep title='Image Upload'>
                    <Paper>
                        <ImageUploader setter={ setValues } />
                    </Paper>
                </WizardStep>
                <WizardStep title='Summary' last onLast={ onLast }>
                    <Paper>
                        <Profile { ...clown } />
                    </Paper>
                </WizardStep>
            </Wizard>
        </Container>
    );
};