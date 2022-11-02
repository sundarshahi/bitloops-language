import { Builder } from "../../src/utils/index.js";

interface Testing {
  a: number;
  b: string;
  c: boolean;
  d?: number;
}

describe('StrictBuilder', () => {
  it('should build', () => {
    const strictBuilder = Builder<Testing>()
      .a(10)
      .b('abc')
      .c(true);

    expect(strictBuilder.build()).toEqual({
      a: 10,
      b: 'abc',
      c: true
    });
  });

  it('will set methods as required', () => {
    // Note that d is optional, however it's set method is not
    const strictBuilder = Builder<Testing>()
        .a(10)
        .b('abc')
        .c(true)
        .d(20);
    const result = strictBuilder.build();

    expect(result).toEqual({
      a: 10,
      b: 'abc',
      c: true,
      d: 20
    });
  });

  it('if no arguments passed return current value.', () => {
    const builder = Builder<Testing>()
        .a(10)
        .b('abc')
        .c(true);

    expect(builder.a()).toEqual(10);
    expect(builder.b()).toEqual('abc');
    expect(builder.c()).toBeTruthy()
    expect(builder.d()).toBeUndefined();
    builder.d(20);
    expect(builder.d()).toEqual(20);
    
    const result = builder.build();

    expect(result).toEqual({
      a: 10,
      b: 'abc',
      c: true,
      d: 20
    });
  });

});