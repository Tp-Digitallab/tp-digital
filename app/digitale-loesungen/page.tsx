import type { Metadata } from "next";

import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Digitale Lösungen für Unternehmen | TP Digital Lab",


description:
"Individuelle digitale Lösungen für Unternehmen. TP Digital Lab entwickelt moderne Systeme, Automatisierungen und digitale Strategien für nachhaltiges Wachstum.",

};



export default function Page(){


return (

<ServicePage


title="Digitale Lösungen"


accent="für moderne Unternehmen."


description="
TP Digital Lab entwickelt individuelle digitale Lösungen,
die Unternehmen effizienter machen. Von Automatisierungen
bis zu maßgeschneiderten Systemen begleiten wir den digitalen Wandel.
"



services={[

"Digitale Transformation",

"Individuelle Webanwendungen",

"Automatisierung von Prozessen",

"Digitale Strategien",

]}


/>

);


}