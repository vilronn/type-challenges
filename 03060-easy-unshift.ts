type Unshift <T extends unknown[], D> = [D, ...T];

type Result = Unshift<[1, 2], 0> // [0, 1, 2]