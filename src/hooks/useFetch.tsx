import React from 'react';
import { get } from '../helpers';
export const useFetch = () => {
    const [ data, setResponse ] = React.useState( [] );
    const [ error, setError ] = React.useState( null );
    const [ loading, setIsLoading ] = React.useState( false );

    React.useEffect( () => {
        const fetchData = async () => {
            setIsLoading( true );
            try {
                const json = await get();
                setResponse( json );
                setIsLoading( false );
            } catch ( error ) {
                setError( error );
            }
        };
        fetchData();
    }, [] );
    return { data, error, loading };
};