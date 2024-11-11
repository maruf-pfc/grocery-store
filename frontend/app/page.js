import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import globalAPI from "./_utils/globalAPI";
import ProductLink from "./_components/ProductLink";

export default async function Home() {
  // Environment variable stored in a constant to avoid client-server mismatch
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  const sliderList = await globalAPI.getSliders();
  const response = await globalAPI.getCategoryList();
  let categoryList = response.data;
  // resize the array to 3
  categoryList = categoryList.slice(0, Math.ceil(categoryList.length / 3));
  const productList = await globalAPI.getAllProducts();

  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList} backendBaseUrl={backendBaseUrl} />
      <CategoryList
        CategoryList={categoryList}
        backendBaseUrl={backendBaseUrl}
      />
      <ProductLink productList={productList} />
    </div>
  );
}
