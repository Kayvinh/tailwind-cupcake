export interface FormInterface {
    flavor: string;
    size: string;
    rating: number | string;
    image: string;
}

export interface CupcakeInterface extends FormInterface {
    id: number;
}