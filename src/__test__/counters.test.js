/**
 * @jest-environment jsdom
 */
describe('Testing', () => {
  test('Should check the number of comments', () => {
    document.body.innerHTML = '<div id="comments"><tr><h3>2022-10-26 Diego:  Ok</h3></tr><tr><h3>2022-10-26 Jorsh:  Hello</h3></tr><tr><h3>2022-10-26 Charles:  Hello</h3></tr><tr><h3>2022-10-26 Luis:  It\'s ok</h3></tr><tr><h3>2022-10-27 Leon:  It\'s working!</h3></tr></div>';
    const comments = document.getElementById('comments').childNodes.length;
    expect(comments).toBe(5);
  });
  test('Should check number of likes', () => {
    document.body.innerHTML = `<div class="card">
    <img src="https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg" alt="Card Logo" class="card-image">
    <section class="card-title">
  <h2 class="font card-header-text">Person of Interest</h2>
  <img src="http://localhost:8082/195d9811adf6b391ebce.png" alt="Love Card" class="like-movie"><section class="like-count">3 Likes</section><section class="footer-buttons">
   <button class="comments-button font" id="btn-1">
     Comments
   </button>
   <button class="reservations-button font">
   Reservations
   </button>
  </section></section></div>`;
    const likes = document.querySelector('.like-count').innerHTML;
    expect(likes).toBe('3 Likes');
  });
  test('Total number of shows', () => {
    const shows = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];
    expect(shows.length).toBe(20);
  });
});