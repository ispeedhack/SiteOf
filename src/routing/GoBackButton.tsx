'use client';

import Button from '@/common/Button';
import { ArrowLeftIcon } from '@/common/Icons';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      aria-label="Повернутися назад"
      circle
      variant="transparent"
      icon={<ArrowLeftIcon />}
      onClick={router.back}
    />
  );
}
