// action creator
// basic function and exported so it is made available to be imported
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}