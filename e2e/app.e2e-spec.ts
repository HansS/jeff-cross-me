import { QuestionsJeffCrossMePage } from './app.po';

describe('questions-jeff-cross-me App', function() {
  let page: QuestionsJeffCrossMePage;

  beforeEach(() => {
    page = new QuestionsJeffCrossMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
