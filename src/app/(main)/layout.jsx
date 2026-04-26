import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import BreakingNews from "@/components/shared/BreakingNews";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        <BreakingNews />
        <NavBar />
      </div>
      {children}
    </>
  );
};
export default MainLayout;
