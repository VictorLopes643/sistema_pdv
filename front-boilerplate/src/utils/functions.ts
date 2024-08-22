import sidebarStyle from "@/styles/modules/crm/components/sidebar/sidebar.module.scss";
import { Dispatch, SetStateAction } from "react";


export const isDarkMode = (theme?: string | null): boolean | null => {
  if (!theme) return null;
  return theme === 'dark';
};

export const getCurrentTheme = (appTheme: string | undefined, systemTheme: 'light' | 'dark' | undefined): 'light' | 'dark' | null => {
    if (!appTheme || !systemTheme) return null;
    if (appTheme != 'light' && appTheme != 'dark') return systemTheme;

    return appTheme;
}

//TODO: Jogar função para escopo do componente
export const closeSidebar = (
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
) => {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar?.classList.contains(sidebarStyle.close)) {
    sidebar?.classList.add(sidebarStyle.close);
    setIsSidebarOpen(false);
  }
};

export const toggleSidebar = (
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
) => {
  const sidebar = document.getElementById("sidebar");
  const isOpen = !(sidebar?.classList.contains("close") as boolean);
  sidebar?.classList.toggle(sidebarStyle.close);

  setSidebarOpen(!isOpen);
};

export const getComponentsVisibility = (pathname: string | null) => {
  //Todo: Refatorar esta validação, pois até o presente momento (07/05/2024) ainda não tenho definido qual regra irá esconder os componentes.
  //P.E: Se o usuário não estiver logado, esconder o header e a sidebar
  //P.E: Esconder para rotas em especifico
  //TODO: Remover gambiarra
  if (
    !pathname ||
    ["/auth/sign-in", "/auth/sign-up"].find((element) => element === pathname)
  ) {
    return {
      showHeader: false,
      showSidebar: false,
      showFooter: true,
    };
  }

  return {
    showHeader: true,
    showSidebar: true,
    showFooter: true,
  };
};
