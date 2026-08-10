import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"SEO für Unternehmen in Deutschland | Suchmaschinenoptimierung für Unternehmen | TP Digital Lab",


description:
"Professionelle SEO Optimierung in Deutschland für Unternehmen. TP Digital Lab verbessert die Google Sichtbarkeit durch technische SEO, Content Optimierung und digitale Strategien.",


alternates: {

canonical:
"/seo",

},


openGraph: {

title:
"SEO Deutschland | TP Digital Lab",


description:
"Professionelle Suchmaschinenoptimierung für Unternehmen in Deutschland.",


url:
"https://tpdigitallab.de/seo",


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

name="SEO Deutschland"

description="
Professionelle Suchmaschinenoptimierung für Unternehmen in Deutschland.
Technische SEO, Content Optimierung und bessere Google Sichtbarkeit.
"

url="https://tpdigitallab.de/seo"

/>



<ServicePage serviceKey="seo" />

</>

);

}