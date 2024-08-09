import NavBar from '../components/ui/navbar';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className='mx-8 mt-8 flex min-h-screen flex-col lg:max-w-7xl xl:mx-auto'>
        {children}
      </main>
    </div>
  );
}
