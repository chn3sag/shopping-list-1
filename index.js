function addFormControls() {
    // Add event listener to add content when form is submitted.
    $('#js-shopping-list-form').submit(event=>{
      event.preventDefault();
        const item = $('#shopping-list-entry').val();
        $('.shopping-list').append(` 
        <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    })

  $('ul').on('click', '.shopping-item-delete', function (event) {
    console.log('Here in remove event listener');
    $(this).closest('li').remove();
  });
  $('ul').on('click', '.shopping-item-toggle',function(event){
    console.log('Here in toggle event listener');
    $(this).parent().siblings('span').toggleClass('shopping-item__checked');
  });
}

$(addFormControls);