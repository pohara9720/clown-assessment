import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { ListItem } from '../components/ListItem';
import { Clown } from '../types';
export const ClownListPage = () => {
    const { data, loading, error } = useFetch();

    if ( loading ) {
        return <h1>Loading</h1>;
    }

    if ( error ) throw new Error( 'Clown Error' );

    return (
        <div>
            <h1>Clown List</h1>
            {data?.map( ( clown: Clown, i: number ) => <ListItem key={ i } { ...clown } /> ) }
        </div>
    );
};