import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import { contentRoutes, footerRoutes } from "./constants";
import {
  SidebarRoot,
  SidebarHeader,
  BrandLogo,
  BrandTitle,
  ItemTitle,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "./styles";
import { useSidebar } from "./SidebarProvider";

export const Sidebar = ({ color }) => {
  const { opened, toggleSidebar } = useSidebar();
  const [activePath, setActivePath] = useState("/");

  const goToRoute = (path) => {
    setActivePath(path);
    console.log(`going to "${path}"`);
  };

  return (
    <SidebarRoot
      $state={opened}
      data-color={color}
      data-collapsible={opened ? undefined : "icon"}
    >
      <SidebarTrigger onClick={toggleSidebar} $state={opened}>
        <FontAwesomeIcon icon={opened ? "angle-left" : "angle-right"} />
      </SidebarTrigger>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <BrandLogo src={logo} alt="Logo" />
              <BrandTitle>TensorFlow</BrandTitle>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {contentRoutes.map((route) => {
            const isActive = activePath === route.path;
            return (
              <SidebarMenuItem key={route.title}>
                <SidebarMenuButton
                  onClick={() => goToRoute(route.path)}
                  data-active={isActive ? "true" : undefined}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  <ItemTitle>{route.title}</ItemTitle>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {footerRoutes.map((route) => {
            const isActive = activePath === route.path;
            return (
              <SidebarMenuItem key={route.title}>
                <SidebarMenuButton
                  onClick={() => goToRoute(route.path)}
                  data-active={isActive ? "true" : undefined}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  <ItemTitle>{route.title}</ItemTitle>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarFooter>
    </SidebarRoot>
  );
};
