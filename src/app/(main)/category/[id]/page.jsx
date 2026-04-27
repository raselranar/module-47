import CategoryList from "@/components/homepage/news/CategoryList";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { getCategory, getNewsByIdCategory } from "@/lib/fetch-data";
import SocialLogin from "./SocialLogin";

const News = async ({ params }) => {
  const {
    data: { news_category: categories },
  } = await getCategory();
  const { id } = await params;
  const news = await getNewsByIdCategory(id);
  return (
    <section className="container mx-auto grid-cols-1 grid sm:grid-cols-6 mt-20">
      {/* categories */}
      <CategoryList categories={categories} />
      <div className="col-span-4 flex flex-col gap-2">
        {news.map((item) => (
          <div className="bg-gray-400 text-white p-4" key={item._id}>
            {item.title}
          </div>
        ))}
      </div>
      {/* Social Icons */}
      <SocialLogin />
    </section>
  );
};
export default News;
