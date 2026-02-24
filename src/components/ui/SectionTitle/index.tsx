type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="wrapper">
      <h2 className="mb-12 text-center text-3xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
