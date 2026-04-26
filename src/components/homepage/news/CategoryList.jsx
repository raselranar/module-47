import NavLink from "@/components/UI/NavLink";

const CategoryList = ({ categories }) => {
  return (
    <div className="">
      <h2 className="text-2xl">All Category</h2>
      <ul className="flex flex-col gap-4 mt-2 ">
        {categories.map((item) => (
          <li
            className="text-gray-500/80 hover:bg-accent-hover hover:text-accent-foreground px-4 py-2 rounded font-medium"
            key={item.category_id}>
            <NavLink href={`/category/${item.category_id}`}>
              {item.category_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryList;
