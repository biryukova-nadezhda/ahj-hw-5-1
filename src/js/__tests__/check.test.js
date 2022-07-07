import check from '../check';

test('should remove block error', () => {
  document.body.innerHTML = `<section class="section">
  <div class="container"><button class="button">Click to toggle popover</button>
  <div class="container_error"><header class="error_header">
  <p class="error_title">Popover title</p></header><section class="error_content">
  <p class="error_text">And here's some amazing content. It's very engaging. Right?</p></section></div>
  </div></section>`;

  const button = document.querySelector('.button');
  check(button);
  const result = document.querySelector('.container_error');
  expect(result).toBeNull();
});

/* test('should add block error', () => {
  document.body.innerHTML = `<section class="section">
  <div class="container" style="position: relative;">
  <button class="button">Click to toggle popover</button>
  </div></section>`;
  const expected = `<div class="container_error"><header class="error_header">
  <p class="error_title">Popover title</p></header><section class="error_content">
  <p class="error_text">And here's some amazing content. It's very engaging. Right?</p>
  </section></div>`;
  const button = document.querySelector('.button');
  check(button);
  const result = document.querySelector('.container_error');
  expect(result).toEqual(expected);
}) */
