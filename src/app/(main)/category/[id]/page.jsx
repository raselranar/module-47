import CategoryList from "@/components/homepage/news/CategoryList";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { getCategory, getNewsByIdCategory } from "@/lib/fetch-data";

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
      <div className="">
        <h2 className="text-lg mb-2">Social Icons</h2>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Login in with Google
          </Button>
          <Button className="w-full" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
export default News;
