import Button from '@/common/Button';
import { CheckOutlinedIcon } from '@/common/Icons';
import { routes } from '@/routing/RoutingUtils';

export default function CheckoutSuccessMessage() {
  return (
    <div className="grid place-items-center text-success-main gap-4">
      <CheckOutlinedIcon className="text-8xl" />
      <div className="font-semibold text-2xl text-center">
      Ваше замовлення отримано
      </div>
      <Button href={routes.search()}>Повернутись до магазину</Button>
    </div>
  );
}
