type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P;
  };

const tuple = [12, true, 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>;

const obj: result = {
    12: 12,
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y',
  }; //correct