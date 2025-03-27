import { format } from "date-fns";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { fetchConcerts } from "@/services/bandsInTown";
import { Concert} from "@/types/bandsInTown";

export default async function Concerts() {
    const concerts: Concert[] = await fetchConcerts(15577413);

    if (concerts.length === undefined) {
        return <p>There are currently no upcoming concerts</p>;
    }

    return (
        <table className="table table-lg">
            <thead className="hidden sm:table-header-group">
            <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {concerts.map((concert) => (
                <tr key={concert.id} className="flex flex-col text-center sm:table-row sm:text-left">
                    <th className="pt-2 pb-0">{format(new Date(concert.datetime), "dd.MM.yyyy")}</th>
                    <td className="py-2">{concert.title}</td>
                    <td className="py-0">
                        {concert.venue.city}
                        {concert.venue.country && `, ${concert.venue.country}`}
                    </td>
                    <td>
                        <a
                            className="btn btn-primary btn-outline"
                            href={concert.offers[0]?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Info / Tickets <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}