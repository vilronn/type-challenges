type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest] // the first element exists
    ? (First extends U ? (U extends First ? true : false) : Includes<Rest, U>) // the first element equals U
    : false; // if array is empty - false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'>