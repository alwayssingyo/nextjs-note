import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothsImage from "../../../public/images/dog-and-cat.jpg";

// export const revalidate = 3;

export default async function ProductsPage() {
  // throw new Error();
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어오자
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothsImage} alt="clothes" priority />
      <section>
        {products.map((product, idex) => (
          <div key={idex}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </section>
      <MeowArticle />
    </>
  );
}
