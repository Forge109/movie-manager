import { MovieManagerPage } from './app.po';

describe('movie-manager App', function() {
  let page: MovieManagerPage;

  beforeEach(() => {
    page = new MovieManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
