export const currentNoteId:number = 0;
export const notes = [
  {
    id: 0,
    title: 'Toilet Paper',
    text: 'lorem impsumsdsa sdfsdfs dfsdfsdf sdfsdf sdfsdf sdfsdf',
    date: new Date(2020, 7, 14),
    status: true
  },
  {
    id: 1,
    title: 'New TV',
    text: '123 123 123 123 l1231odssdrem impsumsdsa sdfsdfs dfsdfsdf sdfsdf sdfsdf sdfsdf',
    date: new Date(2021, 2, 12),
    status: false
  },
  {
    id: 2,
    title: 'Car Insurance',
    text: 'lorem impsumsdsa sdfs546564 545dfs dfs4 654 645645 dfs df sdfsdf sdfsdf sdfsdf',
    date: new Date(2021, 2, 28),
    status: false
  },
  {
    id: 3,
    title: 'New Desk (Wooden)',
    text: 'lorem 2345465786543245b 4564564 4656454 imps ums dsa sdf s dfs d fsd fs df sd fs df sdf sdf sdf sdf',
    date: new Date(2021, 5, 12),
    status: false
  },
];

export type TNote = (typeof notes)[0];
