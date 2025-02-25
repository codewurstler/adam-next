import React from 'react';
import Navigation from "@/app/components/Navigation";

export default function Imprint() {
    return (
        <div>
            <Navigation />
            <header className="bg-gray-200 pt-32 pb-20">
                <div className="container">
                    <h1 className="text-3xl">Imprint (Legal Notice)</h1>
                </div>
            </header>
            <section className="py-20 lg:py-32">
                <div className="container prose">

                    <h2>Information according to Art. 13 of the Swiss Federal Act against Unfair Competition (UWG):</h2>

                    <p><strong>Band Name:</strong> Adam</p>

                    <h3>Represented by:</h3>
                    <p>
                        Philipp Isaak (Lead Singer)<br/>
                        6403 Küssnacht<br/>
                        Switzerland
                    </p>

                    <h3>Contact:</h3>
                    <p>
                        Email: <a href="mailto:dudesofadam@gmail.com">dudesofadam@gmail.com</a><br/>
                        Website: <a href="https://adam-band.com">www.adam-band.com</a>
                    </p>

                    <h3>Disclaimer:</h3>

                    <h4>Liability for Content</h4>
                    <p>
                        The contents of our pages were created with the greatest care. However, we cannot assume any
                        liability for the
                        correctness, completeness, and up-to-dateness of the content. As a service provider, we are
                        responsible for our
                        own content on these pages according to the general laws pursuant to Art. 13 of the Swiss Federal
                        Act against
                        Unfair Competition (UWG).
                    </p>

                    <h4>Liability for Links</h4>
                    <p>
                        Our website contains links to external websites of third parties over whose content we have no
                        influence.
                        Therefore, we cannot assume any liability for these external contents. The respective provider or
                        operator of
                        the pages is always responsible for the content of the linked pages. The linked pages were checked
                        for possible
                        legal violations at the time of linking. Illegal contents were not recognizable at the time of
                        linking. However,
                        a permanent control of the content of the linked pages is not reasonable without concrete evidence
                        of a
                        violation of the law. If we become aware of any legal violations, we will remove such links
                        immediately.
                    </p>

                    <h4>Copyright</h4>
                    <p>
                        The content and works created by the site operators on these pages are subject to Swiss copyright
                        law. The
                        duplication, processing, distribution, and any kind of exploitation outside the limits of copyright
                        law require
                        the written consent of the respective author or creator. Downloads and copies of this site are only
                        permitted
                        for private, non-commercial use. Insofar as the content on this site was not created by the
                        operator, the
                        copyrights of third parties are respected. In particular, third-party content is marked as such.
                        Should you
                        nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming
                        aware of
                        legal violations, we will remove such content immediately.
                    </p>

                    <h4>Privacy</h4>
                    <p>
                        The use of our website is possible without providing personal data. No tracking technologies are
                        used on the
                        website, and no personal data is collected or evaluated.
                    </p>
                </div>
            </section>
        </div>
    );
}