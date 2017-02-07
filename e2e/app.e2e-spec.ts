import { NgToolboxPage } from './app.po';

describe('ng-toolbox App', function() {
  let page: NgToolboxPage;

  beforeEach(() => {
    page = new NgToolboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
