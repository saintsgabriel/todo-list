import { NavLink, Outlet } from "react-router";
import Container from "../components/container/Container";
import Text from "../components/text/Text";

export default function MainLayout() {
  return (
    <>
      <Container as="header" className="mt-e md:mt-20">
        HEADER
      </Container>
      <Container as="main" className="mt-4 md:mt-8">
        <Outlet />
      </Container>
      <Container className="my-5 md:my-10" as="footer">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </Container>
    </>
  );
}
