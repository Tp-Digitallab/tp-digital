import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import Button from "@/components/ui/Button";
import FaqSchema from "@/components/seo/FaqSchema";

type FAQ = {

  question: string;

  answer: string;

};


type Props = {

  title: string;

  accent: string;

  description: string;

  services: string[];

  seoTitle: string;

  seoDescription: string;

  faq: FAQ[];

};



export default function ServicePage({

  title,

  accent,

  description,

  services,

  seoTitle,

  seoDescription,

  faq,

}: Props) {


return (

<>

<FaqSchema items={faq} />


<main className="
relative
min-h-screen
overflow-hidden
bg-black
text-white
">


<BackgroundGrid />


<div className="
absolute
inset-0
bg-gradient-to-b
from-transparent
via-black/20
to-black/90
"/>



<Container>


{/* HERO */}

<section className="
relative
z-10
flex
min-h-screen
items-center
">


<div className="
max-w-4xl
-translate-y-10
">


<p className="
mb-8
text-xs
uppercase
tracking-[0.45em]
text-white/40
">

TP DIGITAL LAB

</p>




<h1 className="
text-[56px]
leading-[0.95]
font-medium
tracking-[-0.05em]
md:text-[90px]
">


{title}


<br />


<span className="
text-white/70
">

{accent}

</span>


</h1>





<p className="
mt-10
max-w-2xl
text-lg
leading-8
text-white/55
">

{description}

</p>





<div className="
mt-12
">

<Button href="/#contact">

Projekt starten

</Button>

</div>



</div>


</section>






{/* SEO TEXT */}

<section className="
relative
z-10
py-24
">


<h2 className="
mb-6
text-3xl
font-medium
">

{seoTitle}

</h2>


<p className="
max-w-3xl
leading-8
text-white/60
">

{seoDescription}

</p>


</section>







{/* SERVICES */}

<section className="
relative
z-10
pb-24
">


<h2 className="
mb-10
text-3xl
font-medium
">


Unsere Leistungen

</h2>



<div className="
grid
gap-6
md:grid-cols-2
">


{services.map((item)=>(


<div

key={item}

className="
rounded-2xl
border
border-white/10
bg-white/[0.05]
p-8
backdrop-blur-xl
transition
duration-300
hover:bg-white/[0.08]
"


>


<h3 className="
text-xl
font-medium
">

{item}

</h3>


</div>


))}


</div>


</section>

{/* WHY TP DIGITAL LAB */}

<section className="
relative
z-10
py-24
">


<h2 className="
mb-10
text-3xl
font-medium
">

Warum TP Digital Lab?

</h2>



<div className="
grid
gap-6
md:grid-cols-3
">



<div className="
rounded-2xl
border
border-white/10
bg-white/[0.05]
p-8
">


<h3 className="
text-xl
font-medium
">

Individuelle Lösungen

</h3>


<p className="
mt-4
text-white/60
">

Keine Standardlösungen.
Jede Website wird passend zu den Zielen
und Anforderungen Ihres Unternehmens entwickelt.

</p>


</div>




<div className="
rounded-2xl
border
border-white/10
bg-white/[0.05]
p-8
">


<h3 className="
text-xl
font-medium
">

SEO & Sichtbarkeit

</h3>


<p className="
mt-4
text-white/60
">

Wir entwickeln Websites mit Fokus auf
Performance, technische Optimierung
und bessere Auffindbarkeit bei Google.

</p>


</div>




<div className="
rounded-2xl
border
border-white/10
bg-white/[0.05]
p-8
">


<h3 className="
text-xl
font-medium
">

Von Idee bis Umsetzung

</h3>


<p className="
mt-4
text-white/60
">

Von der ersten Idee über Design bis zur
fertigen digitalen Lösung begleiten wir
Unternehmen bei jedem Schritt.

</p>


</div>



</div>


</section>






{/* FAQ */}

<section className="
relative
z-10
pb-32
">


<h2 className="
mb-10
text-3xl
font-medium
">

Häufige Fragen

</h2>





<div className="
max-w-3xl
space-y-8
">




{faq.map((item) => (
  <div key={item.question}>

    <h3 className="text-xl">
      {item.question}
    </h3>

    <p className="
      mt-3
      text-white/60
    ">
      {item.answer}
    </p>

  </div>
))}


</div>


</section>






{/* INTERNAL LINKS */}

<section className="
relative
z-10
pb-20
">


<p className="
text-white/40
">

Weitere digitale Lösungen:

</p>



<div className="
mt-5
flex
flex-wrap
gap-5
">


<a

href="/online-shop"

className="
text-white/70
hover:text-white
"

>

Online-Shop Entwicklung

</a>



<a

href="/digitale-loesungen"

className="
text-white/70
hover:text-white
"

>

Digitale Lösungen

</a>




<a

href="/seo"

className="
text-white/70
hover:text-white
"

>

SEO & Sichtbarkeit

</a>



</div>


</section>



</Container>


</main>

</>

);

}