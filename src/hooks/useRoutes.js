import { MdDashboard } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useMemo } from "react";

const useRoutes = () => {
  const pathName = window.location.pathname;
  const isActive = (href) => {
    return pathName === href;
  };

  const routesConfig = [
    {
      top: [
        {
          mainLabel: "Menu",
          items: [
            {
              label: "Dashboard",
              active: isActive("/dashboard"),
              href: "/dashboard",
              icon: MdDashboard,
            },
            {
              label: "Layanan",
              active: isActive("/dashboard/layanan"),
              href: "/dashboard/layanan",
              icon: MdCleaningServices,
            },
            {
              label: "Blog",
              active: isActive("/dashboard/blog"),
              href: "/dashboard/blog",
              icon: FaRegEdit,
            },
          ],
        },
      ],
    },
  ];

  const routes = useMemo(() => {
    return routesConfig.map((section) => {
      const modifiedSection = { ...section };
      if (modifiedSection.top) {
        modifiedSection.top = modifiedSection.top.map((subSection) => {
          const modifiedSubSection = { ...subSection };
          if (modifiedSubSection.items) {
            modifiedSubSection.items = modifiedSubSection.items.map((item) => {
              const modifiedItem = { ...item };
              if (modifiedItem.active === undefined) {
                modifiedItem.active = isActive(modifiedItem.href.split("?")[0]);
              }
              return modifiedItem;
            });
          }
          return modifiedSubSection;
        });
      }
      if (modifiedSection.bottom) {
        modifiedSection.bottom = modifiedSection.bottom.map((subSection) => {
          const modifiedSubSection = { ...subSection };
          if (modifiedSubSection.items) {
            modifiedSubSection.items = modifiedSubSection.items.map((item) => {
              const modifiedItem = { ...item };
              if (modifiedItem.active === undefined) {
                modifiedItem.active = isActive(modifiedItem.href.split("?")[0]);
              }
              return modifiedItem;
            });
          }
          return modifiedSubSection;
        });
      }
      return modifiedSection;
    });
  }, [pathName, isActive, routesConfig]);

  return routes;
};

export default useRoutes;
