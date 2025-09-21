import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  location: {
    pathname: string;
  };
}

const generateBreadcrumbs = ({ location }: BreadcrumbProps) => {
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (pathnames.length === 0) {
    return <span className="text-gray-400 font-semibold ps-3">Dashboards / Default</span>;
  }

  return (
    <span className="text-gray-500 ps-3">
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={routeTo}>
            {!isLast ? (
              <>
                <Link to={routeTo} className="hover:text-black capitalize">
                  {value}
                </Link>{" "}
                /{" "}
              </>
            ) : (
              <span className="font-medium text-black dark:text-white capitalize">{value}</span>
            )}
          </React.Fragment>
        );
      })}
    </span>
  );
};

export default generateBreadcrumbs;
