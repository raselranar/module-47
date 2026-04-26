export const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};
export const getNewsByIdCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const { data } = await res.json();
  return data;
};
