import { Maybe } from './CommonTypes';
import classNames from 'classnames';

type LoadingProps = React.PropsWithChildren<{
  className?: string;
  isLoading: Maybe<boolean>;
  size?: 'default' | 'small';
}>;

export default function Loading({
  className,
  isLoading,
  size = 'default',
  children,
}: LoadingProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div
      className={classNames(
        'flex justify-center',
        children ? 'py-6' : undefined,
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
          'animate-spin text-primary-main',
          size === 'small' ? 'h-6 w-6' : 'h-12 w-12',
        )}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}
