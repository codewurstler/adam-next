export type Concert = {
    id: string;
    datetime: string;
    title: string;
    offers: {
        type: string;
        url: string;
        status: string;
    }[];
    venue: {
        city: string;
        country?: string;
    };
};