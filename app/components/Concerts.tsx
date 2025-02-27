import {format} from "date-fns";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import {fetchConcerts} from "@/services/bandsInTown";

export default async function Concerts() {
    const concerts = await fetchConcerts(15577413);
    return (
        <>
            {concerts.length === undefined ? (
                <p>There are currently no upcoming concerts</p>
            ) : (<table className="table table-lg">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {concerts.map((concert:any) => (
                    <tr key={concert.id}>
                        <th>{format(new Date(concert.datetime), "dd.mM.yyyy")}</th>
                        <td>{concert.title}</td>
                        <td>{concert.venue.city}{concert.venue.country && `, ${concert.venue.country}`}</td>
                        <td><a className="btn btn-primary btn-outline"
                               href={concert.url}
                               target="_blank" rel="noopener noreferrer">Info / Tickets <ArrowTopRightOnSquareIcon
                            className="h-4 w-4 hidden sm:block"/></a></td>
                    </tr>
                ))}
                </tbody>
            </table>)}
        </>
    );
};