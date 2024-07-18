export interface ResponseModel<T> {
    success: boolean;
    error: string;
    data: T
    
}