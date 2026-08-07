type FAQ = {
  question: string;
  answer: string;
};


interface Props {
  items: FAQ[];
}


export default function FaqSchema({ items }: Props) {


const schema = {

"@context": "https://schema.org",

"@type": "FAQPage",

"mainEntity": items.map((item)=>({

"@type": "Question",

"name": item.question,


"acceptedAnswer": {

"@type": "Answer",

"text": item.answer

}

}))

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