import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
 
export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÕES">
          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>
    </Stack>
  );
}