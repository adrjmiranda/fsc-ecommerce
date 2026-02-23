import { CircleQuestionMark, IterationCw, Truck } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="border-b border-gray-200 py-20">
      <div className="wrapper">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Truck className="text-primary" size={64} />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Frete Grátis</h3>
              <p className="text-base">
                Para todo o Brasil acima de R$ 200,00. Exceto para a região
                Norte.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IterationCw className="text-primary" size={64} />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Trocas Grátis</h3>
              <p className="text-base">
                Você tem até 30 dias para trocar seus produtos. Exceto para a
                região Norte.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CircleQuestionMark className="text-primary" size={64} />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Atendimento 24/7</h3>
              <p className="text-base">
                Nossa equipe está disponível 24 horas por dia, 7 dias por semana
                para atender você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
