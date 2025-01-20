import Image from "next/image";
import Link from "next/link";

export default function FeaturedProduct() {
  const featureds = [
    {
      name: "Library Stool Chair1",
      products: "$20",
      image: "/Products (6).png",
      href: "/featureds/library stool chair",
    },
    {
      name: "Library Stool Chair2",
      products: "$20",
      image: "/Products2.png",
      href: "/featureds/library stool-chair",
    },
    {
      name: "Library Stool Chair4",
      products: "$20",
      image: "/Products .png",
      href: "/featureds/library stool-chair",
    },
    {
        name: "Library Stool Chair5",
        products: "$20",
        image: "/Products 1.png",
        href: "/featureds/library stool-chair5",
      },  
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight  mb-8">
          Our Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureds.map((featured) => (
            <Link
              key={featured.name}
              href={"../components/productDescription/description"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] w-full">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={312}
                  height={312}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {featured.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    {featured.products}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}