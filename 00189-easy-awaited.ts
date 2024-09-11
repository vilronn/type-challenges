type MyAwaited<T> = T extends Promise <infer InnerType> ? InnerType : never;

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string