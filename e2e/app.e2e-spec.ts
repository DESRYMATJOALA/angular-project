import { AngularTestProject3Page } from './app.po';

describe('angular-test-project3 App', function() {
  let page: AngularTestProject3Page;

  beforeEach(() => {
    page = new AngularTestProject3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
