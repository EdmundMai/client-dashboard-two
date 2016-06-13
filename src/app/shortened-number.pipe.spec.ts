import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ShortenedNumber } from './shortened-number.pipe';

describe('ShortenedNumber Pipe', () => {
  beforeEachProviders(() => [ShortenedNumber]);

  it('returns 1B', inject([ShortenedNumber], (pipe: ShortenedNumber) => {
    expect(pipe.transform(1000000000)).toEqual('1B');
  }));

  it('returns 1M', inject([ShortenedNumber], (pipe: ShortenedNumber) => {
    expect(pipe.transform(1000000)).toEqual('1M');
  }));

  it('returns 1K', inject([ShortenedNumber], (pipe: ShortenedNumber) => {
    expect(pipe.transform(1000)).toEqual('1K');
  }));

  it('returns 100', inject([ShortenedNumber], (pipe: ShortenedNumber) => {
    expect(pipe.transform(100)).toEqual('100');
  }));
});
