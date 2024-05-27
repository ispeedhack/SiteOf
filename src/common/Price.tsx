import classNames from 'classnames';
import { Maybe } from './CommonTypes';

type PriceProps = {
  className?: string;
  value: Maybe<number>;
};

const priceFormatter = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
});

export default function Price({ className, value }: PriceProps) {
  return (
    <span className={classNames('font-semibold', className)}>
      {priceFormatter.format(value ?? 0)}
    </span>
  );
}
