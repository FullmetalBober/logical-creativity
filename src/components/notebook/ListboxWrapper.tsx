type Props = { children: React.ReactNode };

export const ListboxWrapper = ({ children }: Props) => (
  <div className='w-full max-w-[260px] rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
    {children}
  </div>
);
