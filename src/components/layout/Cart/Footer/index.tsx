import Button from '@/components/ui/Button';

const Footer = () => {
  return (
    <div className="flex shrink-0 flex-col gap-4 py-4">
      <div className="flex items-center justify-between">
        <p className="text-primary-text text-xl font-medium">Subtotal</p>
        <p>R$ 0,00</p>
      </div>
      <Button type="button" variant="primary">
        Continuar
      </Button>
    </div>
  );
};

export default Footer;
