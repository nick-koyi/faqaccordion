document.addEventListener('DOMContentLoaded', () => {
  //load html doc
  const accordionItems = document.querySelectorAll('.accordion-item'); //selcts all accd items
  accordionItems.forEach((item) => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      // collapse all items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector('.accordion-content')
            .classList.remove('active');
          otherItem
            .querySelector('i')
            .classList.replace('fa-circle-minus', 'fa-circle-plus');
        }
      });
      // Toggle the content visibility of the clicked item
      item.querySelector('.accordion-content').classList.toggle('active');
      // Toggle the icon of the clicked item
      if (item.querySelector('i').classList.contains('fa-circle-plus')) {
        item
          .querySelector('i')
          .classList.replace('fa-circle-plus', 'fa-circle-minus');
      } else {
        item
          .querySelector('i')
          .classList.replace('fa-circle-minus', 'fa-circle-plus');
      }
    });
  });
});
