"use client";

const NotFoundPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col flex-grow justify-center items-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        Üzgünüz Sayfa Bulunamadı
      </p>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="bg-black text-white rounded-lg text-sm px-5 py-2.5 my-4 
           border-black hover:bg-one hover:text-white cursor-pointer"
      >
        Ana Sayfaya Dönmek için Tıklayın
      </button>
    </section>
  );
};

export default NotFoundPage;

/*

*/
