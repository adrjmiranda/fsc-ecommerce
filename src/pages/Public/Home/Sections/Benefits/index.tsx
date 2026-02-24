import { CircleQuestionMark, IterationCw, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description:
      'Para todo o Brasil acima de R$ 200,00. Exceto para a região Norte.',
  },
  {
    icon: IterationCw,
    title: 'Trocas Grátis',
    description:
      'Você tem até 30 dias para trocar seus produtos. Exceto para a região Norte.',
  },
  {
    icon: CircleQuestionMark,
    title: 'Atendimento 24/7',
    description:
      'Nossa equipe está disponível 24 horas por dia, 7 dias por semana para atender você.',
  },
];

const Benefits = () => {
  return (
    <section className="border-b border-gray-200 py-20">
      <div className="wrapper">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.length > 0 &&
            benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <benefit.icon className="text-primary shrink-0" size={38} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
