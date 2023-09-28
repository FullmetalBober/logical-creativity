import { GetServerSideProps } from 'next';
import FormTest from '@/components/test/FormTest';
import { TTestSchema } from '@/schemas/test';

type Props = {
  test: TTestSchema;
};

//! Have to pass test data to FormTest component
export default function NewTest({ test }: Props) {
  return (
    <main>
      <FormTest />
    </main>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { id } = params;
//   const test = await getTest(id);
//   return {
//     props: {
//       test,
//     },
//   };
// };
