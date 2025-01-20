import Image from "next/image";
import Link from "next/link";
interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair1",
      price: 20,
      image: "/01 .jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair2",
      price: 20,
      originalPrice: 30,
      image: "/02 .jpg",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair3",
      price: 20,
      image: "/Products .png",
    },
    {
      id: 4,
      title: "Library Stool Chair4",
      price: 20,
      image: "/04 .jpg",
    },
    {
      id: 5,
      title: "Library Stool Chair5",
      price: 20,
      image: "/05 .jpg",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair6",
      price: 20,
      originalPrice: 30,
      image: "/06 .jpg",
      isSale: true,
    },
    {
      id: 7,
      title: "Library Stool Chair7",
      price: 20,
      image: "/07 .jpg",
    },
    {
      id: 8,
      title: "Library Stool Chair8",
      price: 20,
      image: "/01 .jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight  mb-8">
        {" "}
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 gap-6  lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <div className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </div>
              )}
              {product.isSale && (
                <div className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </div>
              )}
              <Link href={"components/productDescription/description"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  height={400}
                  width={400}
                  
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <div className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}