const MarkAllAsRead = document.querySelector('a');
const NotiCounter = document.querySelector('button');
const NotiItems = document.querySelectorAll('span.post-info');


MarkAllAsRead.addEventListener('click', function() {
  NotiItems.forEach(function(item) {
    if (!item.classList.contains('is-old')) {
      item.classList.add('is-old');
    }
  })
  NotiCounter.textContent = 0;
})