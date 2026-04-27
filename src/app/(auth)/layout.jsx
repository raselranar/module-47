import NavBar from "@/components/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default AuthLayout;
