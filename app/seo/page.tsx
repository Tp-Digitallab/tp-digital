import type { Metadata } from "next";

import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"SEO Agentur München | Google Sichtbarkeit verbessern | TP Digital Lab",


description:
"Professionelle SEO Optimierung für Unternehmen. TP Digital Lab verbessert die Google Sichtbarkeit durch technische SEO, Content und digitale Strategien.",

};



export default function Page(){


return (

<ServicePage


title="Mehr Sichtbarkeit"


accent="bei Google."


description="
TP Digital Lab hilft Unternehmen, online besser gefunden zu werden.
Mit technischer SEO, optimierten Websites und digitalen Strategien
verbessern wir Ihre Sichtbarkeit und erreichen mehr potenzielle Kunden.
"



services={[

"Technische SEO Optimierung",

"Google Sichtbarkeit verbessern",

"SEO für Unternehmenswebsites",

"Digitale Wachstumsstrategien",

]}


/>

);


}