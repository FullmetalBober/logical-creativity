import FormTest from '@/components/test/FormTest';
import { getTest } from '@/actions/tests.actions';

type Props = {
  params: {
    id: string;
  };
};

export default async function NewTest({ params }: Props) {
  const { test, error } = await getTest(params.id);

  return (
    <main>
      {/*//TODO: implement custom error  */}
      {error && <p>{error}</p>}
      {test && <FormTest formParams={{ defaultValues: test }} />}
    </main>
  );
}
