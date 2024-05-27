import Button from '@/common/Button';
import {
  APP_DESCRIPTION,
  APP_TITLE,
} from '@/common/CommonUtils';
import { routes } from '@/routing/RoutingUtils';

function Hero() {
  return (
    <div className="bg-background-main shadow-sm">
      <div className="flex flex-col items-center gap-4 text-center py-12 px-4">
        <h1 className="text-primary-main text-3xl sm:text-4xl lg:text-5xl font-black uppercase">
          {APP_TITLE}
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-primary-dark font-semibold">{APP_DESCRIPTION}</p>
        </div>
        <hr className="w-24 border-t-4 border-secondary-lighter" />
        <Button href={routes.search()}>Перейти до магазину</Button>
      </div>
    </div>
  );
}

export default Hero;
