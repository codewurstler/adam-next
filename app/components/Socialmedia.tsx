import { SocialIcon } from "react-social-icons";
import { SocialmediaType } from "@/types/general";

export default function Socialmedia({ urls }: { urls: SocialmediaType[] }) {
    return (
        <div className="flex justify-center space-x-12 flex-wrap">
            {urls.map((url, index) => (
                <div key={index}><SocialIcon url={url.url} target="_blank"
                rel="noopener noreferrer"/></div>
            ))}
        </div>
    );
}