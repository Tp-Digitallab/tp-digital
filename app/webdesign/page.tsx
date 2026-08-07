import type { Metadata } from "next";

import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Webdesign für Unternehmen | TP Digital Lab München",


description:
"Professionelles Webdesign für Unternehmen. Moderne, schnelle und SEO-optimierte Websites für mehr Sichtbarkeit und neue Kunden.",

};



export default function Page(){


return (

<ServicePage

title="Professionelles Webdesign"

accent="für Unternehmen."

description="
TP Digital Lab entwickelt moderne Websites,
die Unternehmen online sichtbar machen,
Vertrauen schaffen und neue Kunden gewinnen.
"

services={[

"Moderne Unternehmenswebsites",

"SEO-optimierte Entwicklung",

"Responsive Design",

"Conversion Optimierung",

]}

/>

);


}