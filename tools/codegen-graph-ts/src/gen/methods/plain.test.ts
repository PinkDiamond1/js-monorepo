import { gen } from '..';
import { Schema } from '../types';
import singleEntityInput from '../../../tests/single-entity.json';
import { getDiagnosticsForText } from '../../../tests/testUtils';
import _ from 'lodash';

import _eval from 'eval';

import ts from 'typescript';

describe('plain', () => {
  const codeOut = gen({
    schema: singleEntityInput as Schema,
    method: 'plain',
    outdir: '/tmp/testgen',
  });

  it('generates valid typescript', () => {
    const diag = getDiagnosticsForText(__dirname, codeOut).map((d) =>
      _.pick(d, 'messageText', 'start', 'length')
    );

    expect(diag).toHaveLength(0);
  });

  it.skip('single call works', async () => {
    const { getOneExchangeFee } = _eval(ts.transpile(codeOut), true);

    const result = await getOneExchangeFee('', { id: 'hello' }, { fee: true });

    console.log(result);
  });

  it.skip('multi call works', async () => {
    const { getManyExchangeFee } = _eval(ts.transpile(codeOut), true);

    const result = await getManyExchangeFee('', { where: { id: 'hello' } }, { fee: true });

    console.log(result);
  });
});
