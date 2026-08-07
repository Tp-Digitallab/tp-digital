import type { Metadata } from "next";
import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Webdesign München | Moderne Websites für Unternehmen | TP Digital Lab",


description:
"Professionelles Webdesign in München für Unternehmen. TP Digital Lab erstellt schnelle, moderne und SEO-optimierte Websites, die Kunden gewinnen und online sichtbar machen.",


alternates: {

canonical:
"/webdesign",

},


openGraph: {

title:
"Webdesign München | TP Digital Lab",


description:
"Moderne, schnelle und SEO-optimierte Websites für Unternehmen.",


url:
"https://tpdigitallab.de/webdesign",


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

name="Webdesign München"

description="
Professionelles Webdesign für Unternehmen in München.
Moderne, schnelle und SEO-optimierte Websites,
die neue Kunden gewinnen.
"

url="https://tpdigitallab.de/webdesign"

/>


<ServicePage

title="Professionelles Webdesign München"

accent="für Unternehmen."

description="
TP Digital Lab entwickelt moderne Websites für Unternehmen in München.
Wir verbinden hochwertiges Design, schnelle Entwicklung und SEO-Optimierung,
damit Ihre Website nicht nur gut aussieht, sondern neue Kunden gewinnt.
"

services={[

"Moderne Unternehmenswebsites",

"SEO-optimierte Entwicklung",

"Responsive Design für alle Geräte",

"Conversion Optimierung für mehr Anfragen",

"Individuelle digitale Lösungen",

]}


/>

</>

);


}