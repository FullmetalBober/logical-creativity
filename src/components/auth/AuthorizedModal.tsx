import MyModal from '@/components/ui/MyModal';
import { useRouter } from 'next/navigation';

type Props = {
  ModalHeaderElement: JSX.Element;
  ModalBodyElement: JSX.Element;
};

export default function AuthorizedModal({ ModalHeaderElement, ModalBodyElement }: Props) {
  const router = useRouter();

  return (
    <MyModal
      isTriggered={true}
      ModalHeaderElement={ModalHeaderElement}
      ModalBodyElement={ModalBodyElement}
      actionButton={{ text: 'Go back', color: 'warning', handler: () => router.back() }}
      size={'lg'}
      color={'warning'}
    />
  );
}
