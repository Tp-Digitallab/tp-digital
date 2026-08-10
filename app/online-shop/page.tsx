import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Online-Shop erstellen lassen in Deutschland",

description:
"Professionelle Online-Shop Entwicklung in Deutschland für Unternehmen. TP Digital Lab erstellt moderne E-Commerce Lösungen, die verkaufen und Kunden erreichen.",


alternates: {

canonical:
"/online-shop",

},


openGraph: {

title:
"Online Shop erstellen Deutschland | TP Digital Lab",


description:
"Moderne E-Commerce Lösungen und professionelle Online-Shop Entwicklung für Unternehmen.",


url:
"https://tpdigitallab.de/online-shop",


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

name="Online Shop Entwicklung Deutschland"

description="
Professionelle E-Commerce Lösungen für Unternehmen.
TP Digital Lab entwickelt moderne Online-Shops mit Fokus auf Performance,
Benutzerfreundlichkeit und digitale Verkäufe.
"

url="https://tpdigitallab.de/online-shop"

/>



<ServicePage serviceKey="onlineShop" />

</>

);

}