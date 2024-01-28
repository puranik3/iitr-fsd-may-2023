const range = ( min : number, max : number ) => {
    return Array(max - min + 1).fill(min).map( ( x, y ) => x + y );
}

export {
    range
};