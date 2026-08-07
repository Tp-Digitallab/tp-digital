import Container from "@/components/common/Container";
import ScrollLink from "@/components/ui/ScrollLink";

export default function Footer() {


return (

<footer className="
relative
border-t
border-white/10
bg-black
text-white
">


<div className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]
pointer-events-none
"
/>



<Container>


<div className="
relative
z-10
grid
gap-12
py-20
md:grid-cols-3
">



{/* Brand */}

<div>


<h2 className="
text-2xl
font-semibold
">

TP Digital Lab

</h2>


<p className="
mt-5
max-w-sm
leading-7
text-white/50
">

Modern websites, digital solutions and
online growth strategies for businesses.

</p>


</div>





{/* Services */}

<div>


<h3 className="
mb-6
text-sm
uppercase
tracking-[0.3em]
text-white/40
">

Services

</h3>



<div className="
flex
flex-col
gap-4
">


<a
href="/webdesign"
className="text-white/70 hover:text-white transition"
>
Webdesign
</a>


<a
href="/online-shop"
className="text-white/70 hover:text-white transition"
>
Online-Shop
</a>


<a
href="/seo"
className="text-white/70 hover:text-white transition"
>
SEO Optimierung
</a>


<a
href="/digitale-loesungen"
className="text-white/70 hover:text-white transition"
>
Digitale Lösungen
</a>



</div>


</div>





{/* Company */}

<div>


<h3 className="
mb-6
text-sm
uppercase
tracking-[0.3em]
text-white/40
">

Company

</h3>



<div className="
flex
flex-col
gap-4
">


<ScrollLink
href="#projects"
className="text-white/70 hover:text-white transition"
>
Projects
</ScrollLink>


<ScrollLink
href="#process"
className="text-white/70 hover:text-white transition"
>
Process
</ScrollLink>


<ScrollLink
href="#contact"
className="text-white/70 hover:text-white transition"
>
Contact
</ScrollLink>


</div>


</div>



</div>






<div className="
relative
z-10
border-t
border-white/10
py-8
text-sm
text-white/40
">


© {new Date().getFullYear()} TP Digital Lab. All rights reserved.


</div>



</Container>


</footer>

);

}