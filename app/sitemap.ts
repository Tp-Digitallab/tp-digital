import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

return [

{
url: "https://tpdigitallab.de",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},


{
url: "https://tpdigitallab.de/webdesign",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


{
url: "https://tpdigitallab.de/online-shop",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


{
url: "https://tpdigitallab.de/digitale-loesungen",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


{
url: "https://tpdigitallab.de/seo",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


];

}