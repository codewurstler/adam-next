//fetch concerts
export const fetchConcerts = async (artistId:number) => {
    const apiKey:string | undefined = process.env.BANDSINTOWN_APIKEY;
    try {
        const data: Response = await fetch(`https://rest.bandsintown.com/artists/id_${artistId}/events?app_id=${apiKey}&date=upcoming`);
        return await data.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}