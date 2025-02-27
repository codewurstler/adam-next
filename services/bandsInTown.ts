//fetch concerts
import {Concert} from "@/types/bandsInTown";

export const fetchConcerts = async (artistId: number): Promise<Concert[]> => {
    const apiKey = process.env.BANDSINTOWN_APIKEY;
    try {
        const data = await fetch(`https://rest.bandsintown.com/artists/id_${artistId}/events?app_id=${apiKey}&date=upcoming`, {cache: 'no-store'});
        return (await data.json()) as Concert[];
    } catch (error) {
        console.error(error);
        return [];
    }
};