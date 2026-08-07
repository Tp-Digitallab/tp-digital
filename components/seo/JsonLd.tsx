export default function JsonLd() {


const schema = {

"@context":
"https://schema.org",


"@type":
"ProfessionalService",


"name":
"TP Digital Lab",


"url":
"https://tpdigitallab.de",


"description":
"TP Digital Lab entwickelt moderne Websites, Webanwendungen und digitale Lösungen für Unternehmen.",


"areaServed": {

"@type":
"Country",

"name":
"Deutschland"

},


"serviceType":[

"Webdesign",

"Webentwicklung",

"SEO Optimierung",

"Landing Pages",

"Digitale Lösungen"

],


"sameAs":[

]

};



return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schema)

}}

/>

);

}