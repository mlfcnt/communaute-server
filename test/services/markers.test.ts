import app from '../../src/app';

describe('\'markers\' service', () => {
  it('registered the service', () => {
    const service = app.service('markers');
    expect(service).toBeTruthy();
  });
});
