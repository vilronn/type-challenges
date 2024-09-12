type Push<T extends unknown[], D> =  [...T, D];


type Result = Push<[1, 2], '3'> // [1, 2, '3']