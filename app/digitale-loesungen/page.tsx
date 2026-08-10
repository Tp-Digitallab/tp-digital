import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Digitale Lösungen für Unternehmen",


description:
"Individuelle digitale Lösungen für Unternehmen in Deutschland. TP Digital Lab entwickelt moderne Webanwendungen, Automatisierungen und digitale Systeme für Unternehmen.",


alternates: {

canonical:
"/digitale-loesungen",

},


openGraph: {

title:
"Digitale Lösungen für Unternehmen | TP Digital Lab",


description:
"Moderne Webentwicklung, digitale Systeme und individuelle Lösungen für Unternehmen.",


url:
"https://tpdigitallab.de/digitale-loesungen",


siteName:
"TP Digital Lab",


locale:
"de_DE",


type:
"website",

},

};



export default function Page(){


return (

<>


<ServiceSchema

name="Digitale Lösungen für Unternehmen"

description="
Individuelle digitale Lösungen, Webentwicklung und moderne Anwendungen
für Unternehmen in Deutschland.
"

url="https://tpdigitallab.de/digitale-loesungen"

/>



<ServicePage serviceKey="digitalSolutions" />

</>

);

}