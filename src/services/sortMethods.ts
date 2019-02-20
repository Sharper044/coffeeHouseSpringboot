import { IQuestion } from '../testData';

interface ISort {
  label: string;
  function: (q1: IQuestion, q2: IQuestion) => number;
}

export const sortMethods: ISort[] = [
  {
    label: 'Highest Rating',
    function: (q1, q2) => q2.rating - q1.rating,
  },
  {
    label: 'Lowest Rating',
    function: (q1, q2) => q1.rating - q2.rating,
  },
  // TODO: add most recent activity, Newest, Oldest
];