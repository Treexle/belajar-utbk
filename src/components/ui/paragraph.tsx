export const Paragraph = () => {
  return (
    <>
      <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
        Platform yang dibuat dengan tujuan agar teman-teman semua dapat berlatih
        dan beradaptasi dengan soal-soal UTBK yang diluar nalar
      </p>
      {/* // untuk tampilan mobile  */}
      <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
        Platform yang dibuat dengan tujuan agar teman-teman semua dapat berlatih
        dan beradaptasi dengan soal-soal UTBK yang diluar nalar
      </p>
    </>
  );
};
