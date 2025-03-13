import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { createBook, deleteBook, detailBook, editBook, listBooks, TBodyBook, TBooksParams } from '../../services/books';

// Query keys for better organization
export const booksKeys = {
    all: ['books'] as const,
    lists: () => [...booksKeys.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => [...booksKeys.lists(), filters] as const,
    details: () => [...booksKeys.all, 'detail'] as const,
    detail: (id: string) => [...booksKeys.details(), id] as const,
}

// Get all books
export function useBooks(params?: TBooksParams, options?: UseQueryOptions) {
    return useQuery({
        queryKey: booksKeys.list(params || {}),
        queryFn: () => listBooks(params || { page: 1, limit: 10 }),
        ...options
    });
}

// Get a specific book by ID
export function useBook(id: string, options?: UseQueryOptions) {
    return useQuery({
        queryKey: booksKeys.detail(id),
        queryFn: () => detailBook(id),
        ...options
    });
}

// Create a new book
export function useCreateBook() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookData: Omit<TBodyBook, 'id'>) => createBook(bookData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: booksKeys.lists() });
        },
    });
}

// Update an existing book
export function useUpdateBook() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, ...data }: { id: string } & TBodyBook) =>
            editBook(id, data),
        onSuccess: (data, variables) => {
            // Update the specific book in the cache
            queryClient.invalidateQueries({ queryKey: booksKeys.detail(variables.id) });
            // Update any lists that might contain this book
            queryClient.invalidateQueries({ queryKey: booksKeys.lists() });
        },
    });
}

// Delete a book
export function useDeleteBook() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteBook(id),
        onSuccess: (_data, id) => {
            // Remove the book from the cache
            queryClient.invalidateQueries({ queryKey: booksKeys.lists() });
            queryClient.removeQueries({ queryKey: booksKeys.detail(id) });
        },
    });
}