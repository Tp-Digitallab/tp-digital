export default function JsonLd() {

const schema = {

"@context": "https://schema.org",

"@type": "ProfessionalService",

"name": "TP Digital Lab",

"url": "https://tpdigitallab.de",

"description":
"TP Digital Lab entwickelt moderne Websites, Webanwendungen und digitale Lösungen für Unternehmen. Professionelles Webdesign, SEO und individuelle digitale Lösungen.",


"founder": {

"@type": "Person",

"name": "Taras Pakhaliuk"

},


"areaServed": {

"@type": "Country",

"name": "Deutschland"

},


"hasOfferCatalog": {

"@type": "OfferCatalog",

"name": "Digitale Dienstleistungen",


"itemListElement": [

{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Webdesign",

"description":
"Moderne und professionelle Websites für Unternehmen."

}

},


{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Webentwicklung",

"description":
"Individuelle Webentwicklung und digitale Lösungen für Unternehmen."

}

},


{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "SEO Optimierung",

"description":
"Technische SEO und Optimierung für bessere Google Sichtbarkeit."

}

},


{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Online Shop Entwicklung",

"description":
"Individuelle E-Commerce Lösungen für Unternehmen."

}

},


{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Digitale Lösungen",

"description":
"Moderne digitale Lösungen und Webanwendungen für Unternehmen."

}

}

]

},


"sameAs": []

};



return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html: JSON.stringify(schema),

}}

/>

);

}