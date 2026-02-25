const EmptyCategoriesFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <p className="text-gray-500">
        Ops! Nenhuma coleção disponível no momento.
      </p>
    </div>
  );
};

export default EmptyCategoriesFallback;
