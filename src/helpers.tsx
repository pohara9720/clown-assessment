export const post = ( values: any ) => {
    const clowns = localStorage.getItem( 'clowns' );
    const list = clowns ? JSON.parse( clowns ) : [];
    list.push( values );
    localStorage.setItem( 'clowns', JSON.stringify( list ) );
};

export const get = () => {
    const clowns = localStorage.getItem( 'clowns' );
    const list = clowns ? JSON.parse( clowns ) : [];
    return list;
};