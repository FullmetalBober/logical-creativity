import { createTest } from './actions';
import FormTest from '@/components/test/FormTest';

export default function NewTest() {
  return (
    <main className="hero">
      <FormTest submitAction={createTest} />
    </main>
  );
}
