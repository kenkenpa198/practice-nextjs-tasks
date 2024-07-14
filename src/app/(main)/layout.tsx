import { SideMenu } from '@/components/SideMenu/SideMenu';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="flex-1 overflow-auto bg-slate-50">{children}</main>
    </div>
  );
};

export default MainLayout;
