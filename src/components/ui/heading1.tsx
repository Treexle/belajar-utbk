export const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
        {children}
      </h1>
    </>
  );
};
