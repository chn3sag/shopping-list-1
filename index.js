function addFormControls() {
    // Add event listener to add content when form is submitted.
    $('js-shopping-list-form').submit(event=>{
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
}