import React from "react";
import { Link } from "react-router-dom";

function className({ active }) {
  return `pl-6 py-3 mx-5 rounded-md text-center cursor-pointer mb-3 flex items-center transition-colors md:text-base text-sm ${
    active
      ? "bg-indigo-600 bg-opacity-[0.5] text-white"
      : "text-zinc-500 hover:bg-indigo-600 hover:bg-opacity-[0.6] hover:text-white"
  }`;
}
const Items = ({ label, icon: Icon, active, href, onClick, isButton }) => (
  <>
    {isButton ? (
      <div onClick={onClick} className={className({ active })}>
        <Icon className="h-5 w-5 shrink-0 mr-2" />
        <div>
          <p>{label}</p>
        </div>
      </div>
    ) : (
      <Link to={href} className={className({ active })}>
        <Icon className="h-5 w-5 shrink-0 mr-2 " />
        <div>
          <p>{label}</p>
        </div>
      </Link>
    )}
  </>
);

const SidebarItem = ({ mainLabel, items }) => (
  <div className="mb-4">
    {items.map((item, index) => (
      <Items
        key={index}
        label={item.label}
        icon={item.icon}
        active={item.active}
        href={item.href}
        isButton={item.isButton}
        onClick={item.onClick}
      />
    ))}
  </div>
);

export default SidebarItem;
