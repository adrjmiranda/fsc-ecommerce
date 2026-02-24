import FooterPromotionImage from '@/assets/images/footer-promotion.webp';
import { MailIcon, PhoneCallIcon, PinIcon } from 'lucide-react';

import Button from '@/components/ui/Button';
import FormInput from '@/components/ui/Form/FormInput';

const Footer = () => {
  return (
    <footer>
      <div className="border-t border-gray-200">
        <div className="wrapper">
          <div className="py-20">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-6">
              <div className="flex flex-col gap-10">
                <h4 className="text-base font-medium">Navegação</h4>

                <div className="grid gap-12 sm:grid-cols-3 sm:gap-6">
                  <ul className="text-primary-text flex flex-col gap-4 font-extralight">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Vender online
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Recursos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Carrinho de compras
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Construta uma loja
                      </a>
                    </li>
                  </ul>

                  <ul className="text-primary-text flex flex-col gap-4 font-extralight">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        App da loja
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Dropshipping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Desenvolva um site
                      </a>
                    </li>
                  </ul>

                  <ul className="text-primary-text flex flex-col gap-4 font-extralight">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Ponto de vendas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Hardware
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors duration-200 ease-in"
                      >
                        Software
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-12 sm:grid-cols-2 sm:gap-6">
                <div className="flex flex-col gap-10">
                  <h4 className="text-base font-medium">Promoção</h4>

                  <div className="flex flex-col gap-2">
                    <img
                      src={FooterPromotionImage}
                      alt="Promoção Imperdível"
                      className="h-40 w-full rounded-sm object-cover object-center"
                    />

                    <p className="text-primary">
                      Encontre a roupa perfeita para você
                    </p>
                    <p className="text-primary-text">
                      Válida de 15 a 30 de Janeiro
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-10">
                  <h4 className="text-base font-medium">
                    Informações de Contato
                  </h4>

                  <ul className="text-primary-text flex flex-col gap-4 font-extralight">
                    <li className="flex items-start gap-2">
                      <PinIcon size={16} className="text-primary mt-1" />
                      <p className="text-base">
                        Rua da Flores, 404, Lordão, São Paulo - SP
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <PhoneCallIcon
                        size={16}
                        className="text-primary mt-0.5"
                      />
                      <p className="text-base">(73) 3525-6518</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <MailIcon size={16} className="text-primary mt-1" />
                      <a
                        href="mailto:fscecommerce@contato.com"
                        className="text-base"
                      >
                        fscecommerce@contato.com
                      </a>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-10">
                    <h4 className="text-base font-medium">Newsletter</h4>

                    <p>Receba as últimas novidades e ofertas especiais</p>

                    <form className="flex items-center rounded-sm p-2 ring-1 ring-gray-300">
                      <FormInput type="email" placeholder="Digite seu e-mail" />
                      <Button type="submit" variant="primary">
                        Enviar
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="py-8">
            <p className="text-center text-sm">
              Copyright ©2026 Todos os direitos reservados | Desenvolvido por{' '}
              <a
                href="https://github.com/adrjmiranda"
                target="_blank"
                className="text-primary text-sm font-medium"
              >
                Adriano Miranda
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
