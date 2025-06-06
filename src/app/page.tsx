
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground p-4">
      <main className="text-center">
        <h1 className="text-5xl font-bold font-headline mb-4">Site em Construção</h1>
        <p className="text-xl text-muted-foreground font-body">Esta página está sendo preparada.</p>
        <p className="text-sm text-muted-foreground font-body mt-8">
          (Para restaurar o conteúdo anterior, você pode me pedir para reverter esta alteração.)
        </p>
      </main>
    </div>
  );
}
