import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import uploadDefault from '../images/upload_clown.png';
import { ifProp, prop } from 'styled-tools';
import { grey } from '../palette';
import { ImageUploaderProps } from '../types';

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const ImageUploaderComponent = styled.div<{ src?: string; }>`
    max-width:300px;
    cursor:pointer;
    border-radius:8px;
    ${ ifProp( 'src', css`
        background-image: url(${ prop( 'src' ) });
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;
        width:100%;
        height:300px;
    `, css`
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:${ grey };
        padding:16px;
    `
) };
   
`;

const Default = styled.img`
    height:300px;
`;
export const ImageUploader = ( { setter }: ImageUploaderProps ): JSX.Element => {
    const [ preview, setPreview ] = useState<any>( null );

    const onClick = () => {
        const el = document.getElementById( 'image-upload' );
        el?.click();
    };

    const onInputChange = ( e: any ) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[ 0 ];
        reader.readAsDataURL( file );
        reader.onloadend = e => {
            setPreview( reader.result );
            setter( ( state: any ) => ( { ...state, image: reader.result } ) );
        };

    };

    return (
        <Container>
            <ImageUploaderComponent onClick={ onClick } src={ preview }>
                { !preview && <Default src={ uploadDefault } /> }
                <input id='image-upload' type='file' style={ { display: 'none' } } onChange={ onInputChange } accept="image/jpg, image/jpeg, image/png" />
            </ImageUploaderComponent>
        </Container>
    );
};