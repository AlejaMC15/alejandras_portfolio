import Image from "next/image";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="flex min-h-screen items-center justify-center">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Texto con animación */}
            <div className="md:w-1/2 text-left animate-fadeIn">
              <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl">
                FRONTEND DEVELOPER
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Desarrolladora frontend apasionada por crear experiencias web atractivas e innovadoras.
              </p>
            </div>

            {/* Imagen con animación */}
            <div className="md:w-1/2 flex justify-center animate-scaleIn">
              <Image
                src="/images/ale2.jpg"
                alt="Foto de Alejandra"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-600 shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
