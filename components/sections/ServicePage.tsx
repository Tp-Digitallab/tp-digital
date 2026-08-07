import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import Button from "@/components/ui/Button";


type Props = {

  title: string;

  accent: string;

  description: string;

  services: string[];

};



export default function ServicePage({

  title,

  accent,

  description,

  services,

}: Props) {


return (

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


Warum professionelle digitale Lösungen wichtig sind

</h2>



<p className="
max-w-3xl
leading-8
text-white/60
">


Eine moderne digitale Lösung ist mehr als nur eine
Online-Präsenz. Sie hilft Unternehmen Vertrauen
aufzubauen, neue Kunden zu erreichen und langfristig
online erfolgreich zu wachsen.


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


Häufige Fragen zum Webdesign

</h2>





<div className="
max-w-3xl
space-y-8
">


<div>


<h3 className="text-xl">

Wie viel kostet eine professionelle Website?

</h3>


<p className="
mt-3
text-white/60
">

Die Kosten hängen vom Umfang und den Anforderungen ab.
TP Digital Lab entwickelt individuelle Lösungen für
Unternehmen.

</p>


</div>





<div>


<h3 className="text-xl">

Wie lange dauert die Entwicklung einer Website?

</h3>


<p className="
mt-3
text-white/60
">

Die meisten Projekte können innerhalb weniger Wochen
umgesetzt werden.

</p>


</div>



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

);


}