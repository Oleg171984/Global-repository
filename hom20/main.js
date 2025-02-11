$(document).ready(function() {
            
    $('#todo-list').on('click', '.list-group-item', function() {
        const taskText = $(this).data('task');
        $('#taskContent').text(taskText);
        $('#taskModal').modal('show');
    });
});