import type { Metadata } from "next";

import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Online Shop Entwicklung für Unternehmen | TP Digital Lab",


description:
"Professionelle Online-Shop Entwicklung für Unternehmen. TP Digital Lab erstellt moderne E-Commerce Lösungen, mit denen Unternehmen online verkaufen und wachsen können.",

};



export default function Page(){


return (

<ServicePage


title="Professionelle Online-Shops"


accent="für Ihr digitales Wachstum."


description="
TP Digital Lab entwickelt moderne E-Commerce Lösungen
für Unternehmen, die Produkte online verkaufen,
neue Kunden erreichen und ihr Geschäft digital erweitern möchten.
"



services={[

"Individuelle Online-Shop Entwicklung",

"E-Commerce Lösungen",

"Optimierte Nutzererfahrung",

"Digitale Verkaufsprozesse",

]}


/>

);


}