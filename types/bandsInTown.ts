export type Concert = {
    id: string;
    datetime: string;
    title: string;
    url: string;
    venue: {
        city: string;
        country?: string;
    };
};