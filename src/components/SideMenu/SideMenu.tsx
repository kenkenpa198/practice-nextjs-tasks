import { NavList } from './NavList/NavList';

export const SideMenu = () => {
  return (
    <div className="w-56 bg-gray-800 pt-8 text-white">
      <div>
        <h1 className="px-4 text-2xl font-bold">Next Tasks</h1>
        <NavList />
      </div>
    </div>
  );
};
