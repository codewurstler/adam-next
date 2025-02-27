import {format} from "date-fns";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export default async function Concerts() {
    const artistId: number = 15577413;
    const apiKey: string = '7f85ff0d89d28255ff52ed53d42ae31d';
    const data = await fetch(`https://rest.bandsintown.com/artists/id_${artistId}/events?app_id=${apiKey}&date=upcoming`);
    const concerts = await data.json();
    return (

        <table className="table table-lg">
            <thead>
            <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {concerts.map((concert) => (
                <tr key={concert.id}>
                    <th>{format(new Date(concert.datetime), "mM.dd.yyyy")}</th>
                    <td>{concert.title}</td>
                    <td>{concert.venue.city}{concert.venue.country && `, ${concert.venue.country}`} </td>
                    <td><a className="btn btn-link"
                           href={concert.url}
                           target="_blank" rel="noopener noreferrer">Info / Tickets <ArrowTopRightOnSquareIcon
                        className="h-4 w-4"/> </a></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

