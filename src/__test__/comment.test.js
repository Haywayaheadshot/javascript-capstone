/**
 * @jest-environment jsdom
 */

describe('addComment', () => {
  document.body.innerHTML = '<div id="comments"><tr><h3>2022-10-26 Diego:  Ok</h3></tr><tr><h3>2022-10-26 Jorsh:  Hello</h3></tr><tr><h3>2022-10-26 Charles:  Hello</h3></tr><tr><h3>2022-10-26 Luis:  It\'s ok</h3></tr><tr><h3>2022-10-27 Leon:  It\'s working!</h3></tr></div>';

  test('Should check the number of comments', () => {
    const comments = document.getElementById('comments').childNodes.length;
    expect(comments).toBe(5);
  });
});