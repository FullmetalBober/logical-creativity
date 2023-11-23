import notebookCss from './notebook.module.css';

type Props = { children: React.ReactNode };

export const ListboxWrapper = ({ children }: Props) => (
  <div className={notebookCss.wrapper}>
    {children}
  </div>
);
