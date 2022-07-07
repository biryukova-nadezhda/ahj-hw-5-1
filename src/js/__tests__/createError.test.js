import createErrorBlock from '../createError';

test('should create a new block error', () => {
  document.body.innerHTML = '<div class="container_error"><header class="error_header"><p class="error_title">Popover title</p></header><section class="error_content"><p class="error_text">And here\'s some amazing content. It\'s very engaging. Right?</p></section></div>';
  const expected = document.querySelector('.container_error');
  const result = createErrorBlock();
  expect(result).toEqual(expected);
});
