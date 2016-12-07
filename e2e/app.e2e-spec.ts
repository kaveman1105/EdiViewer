import { EDIPDFViewerPage } from './app.po';

describe('edi-pdf-viewer App', function() {
  let page: EDIPDFViewerPage;

  beforeEach(() => {
    page = new EDIPDFViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
