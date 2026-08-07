import type { Metadata } from "next";
import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";


export const metadata: Metadata = {

title:
"Webdesign Deutschland | Moderne Websites für Unternehmen | TP Digital Lab",


description:
"Professionelles Webdesign in Deutschland für Unternehmen. TP Digital Lab erstellt schnelle, moderne und SEO-optimierte Websites, die Kunden gewinnen und online sichtbar machen.",


alternates: {

canonical:
"/webdesign",

},


openGraph: {

title:
"Webdesign Deutschland | TP Digital Lab",


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

<ServicePage

title="Professionelles Webdesign Deutschland"

accent="für Unternehmen."

description="
TP Digital Lab entwickelt professionelles Webdesign für Unternehmen in Deutschland.
Wir erstellen moderne, schnelle und SEO-optimierte Websites, die nicht nur
visuell überzeugen, sondern Besucher in Kunden verwandeln.
Von der Konzeption über das Design bis zur technischen Umsetzung entsteht
eine digitale Lösung, die Ihr Unternehmen langfristig online stärkt.
"


services={[

"Individuelles Webdesign für Unternehmen",

"SEO-optimierte Website Entwicklung",

"Responsive Design für Smartphone, Tablet und Desktop",

"Conversion Optimierung für mehr Kundenanfragen",

"Schnelle und technisch optimierte Websites",

]}


seoTitle="Warum professionelles Webdesign wichtig ist"


seoDescription="
Eine professionelle Website ist heute die digitale Visitenkarte eines Unternehmens.
Sie schafft Vertrauen, verbessert die Sichtbarkeit bei Google und hilft dabei,
neue Kunden zu gewinnen.
Eine schnelle, moderne und benutzerfreundliche Website unterstützt Unternehmen
dabei, langfristig online erfolgreich zu sein.
"


faq={[

{

question:
"Wie viel kostet eine professionelle Website?",

answer:
"Die Kosten hängen vom Umfang, Design und den gewünschten Funktionen ab. TP Digital Lab entwickelt individuelle Websites für Unternehmen."

},


{

question:
"Wie lange dauert die Entwicklung einer Website?",

answer:
"Die Dauer hängt vom Projektumfang ab. Viele Unternehmenswebsites können innerhalb weniger Wochen umgesetzt werden."

},


{

question:
"Warum ist professionelles Webdesign wichtig?",

answer:
"Eine moderne Website stärkt das Vertrauen der Kunden, verbessert die Online-Sichtbarkeit und unterstützt die Gewinnung neuer Anfragen."

}

]}


/>

</>

);


}