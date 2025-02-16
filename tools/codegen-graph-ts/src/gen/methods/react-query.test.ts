import { gen } from '..';
import { Schema } from '../types';
import singleEntityInput from '../../../tests/single-entity.json';
import { getDiagnosticsForText } from '../../../tests/testUtils';
import _ from 'lodash';
import _eval from 'eval';
import ts from 'typescript';
import fetch from 'node-fetch';

jest.mock('node-fetch');

describe('reactquery', () => {
  const codeOut = gen({
    schema: singleEntityInput as Schema,
    method: 'reactquery',
    outdir: '/tmp/testgen',
  });

  (fetch as any).mockResolvedValue({ json: { data: { exchangeFees: [{ id: 'hello' }] } } });

  it('generates valid typescript', () => {
    const diag = getDiagnosticsForText(__dirname, codeOut).map((d) =>
      _.pick(d, 'messageText', 'start', 'length')
    );

    expect(diag).toHaveLength(0);
  });

  it.skip('single call works', async () => {
    const { useGetOneExchangeFee } = _eval(ts.transpile(codeOut), true);

    const result = await useGetOneExchangeFee('', { id: 'hello' }, { fee: true });

    console.log(result);
  });

  it.skip('multi call works', async () => {
    const { useGetManyExchangeFee } = _eval(ts.transpile(codeOut), true);

    console.log(_eval(ts.transpile(codeOut), true));

    const result = await useGetManyExchangeFee('', { where: { id: 'hello' } }, { fee: true });

    console.log(result);
  });
});
