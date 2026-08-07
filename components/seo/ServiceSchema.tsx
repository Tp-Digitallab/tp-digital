interface Props {
  name: string;
  description: string;
  url: string;
}


export default function ServiceSchema({
  name,
  description,
  url,
}: Props) {


const schema = {

"@context": "https://schema.org",

"@type": "Service",

"name": name,

"description": description,

"provider": {

"@type": "ProfessionalService",

"name": "TP Digital Lab",

"url": "https://tpdigitallab.de"

},

"areaServed": {

"@type": "Country",

"name": "Deutschland"

},

"url": url

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