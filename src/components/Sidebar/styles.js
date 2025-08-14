import styled from "styled-components";

export const SidebarRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$state ? "240px" : "74px")};
  min-width: ${(props) => (props.$state ? "240px" : "74px")};

  color: ${(props) => props.theme.text.default};
  box-sizing: border-box;
  height: 100%;
  transition: width 200ms ease, min-width 200ms ease;
  background: ${(props) => props.theme.sidebar.background.default};
  border-radius: 24px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SidebarMenuItem = styled.li`
  position: relative;
  list-style: none;
`;

export const SidebarMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 14px;
  background: transparent;
  color: ${(props) => props.theme.text.default};
  text-align: left;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: width 200ms ease, background-color 150ms ease, color 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    background: ${(props) => props.theme.sidebar.background.hover};
    color: ${(props) => props.theme.text.hover};
  }

  &:active {
    background: ${(props) => props.theme.sidebar.background.active};
    color: ${(props) => props.theme.text.active};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${(props) => props.theme.logo};
  }

  &[data-active="true"] {
    background: ${(props) => props.theme.sidebar.background.active};
    color: ${(props) => props.theme.text.active};
  }

  & > svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  & > span:last-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const BrandLogo = styled.img`
  width: 36px;
  height: 30px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const BrandTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.logo};
`;

export const SidebarTrigger = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: ${(props) =>
    props.$state
      ? props.theme.button.default
      : props.theme.button.closed.default};
  color: ${(props) => props.theme.text.default};
  cursor: pointer;
  display: grid;
  place-items: center;
  &:active {
    background: ${(props) =>
      props.$state
        ? props.theme.button.active
        : props.theme.button.closed.active};
  }
  position: absolute;
  z-index: 10;
  right: ${(props) => (props.$state ? "-15px" : "-45px")};
  top: 20px;
  transition: right 200ms ease;
`;

export const ItemTitle = styled.span`
  font-size: 16px;
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;
