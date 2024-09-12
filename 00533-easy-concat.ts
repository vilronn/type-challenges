type Concat<T extends unknown[], D extends unknown[]> =  [...T, ...D];


type Result = Concat<[1], [2]> // expected to be [1, 2]
type Test1 = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
type Test2 = Concat<[], [3, 4]>; // [3, 4]