import app from '../../src/app';

describe('\'markersCategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('markers-categories');
    expect(service).toBeTruthy();
  });
});
