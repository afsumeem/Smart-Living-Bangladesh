import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

export default function CategoryPage({ products, category }) {
  return (
    <>
      <Head>
        <title>{category} Products - Smart Living Bangladesh</title>
        <meta name="description" content={`Products for ${category}`} />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">{category} Products</h1>
        {products.map((product, i) => (
          <div key={i}>
            <h2>{product.productName}</h2>
          </div>
        ))}
      </main>
    </>
  );
}

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { category } = context.params;

  // Fetch products for the specific category
  const res = await fetch(`http://localhost:5000/products`);
  const allProducts = await res.json();
  const products = allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  console.log(products);

  return {
    props: {
      products,
      category,
    },
  };
};
