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

  it('should transform the input', inject([ShortenedNumber], (pipe: ShortenedNumber) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
