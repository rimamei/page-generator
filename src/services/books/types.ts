export type TBooksParams = {
    page: number,
    limit: number,
    search?: string,
}

export type TBodyBook = {
    name: string,
    year: number,
}