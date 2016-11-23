$(function(){

function execute(){
	var value = $('#item').val()
	if(value){
		addItemTodo(value);
		$('#item').val('');
	}
}

$('button.enter').on('click', execute)

$('input').keypress(function(e) {
    if (event.which == 13) execute();
});

$('ul').delegate('button.trash','click', removeTask);
$('ul').delegate('button.ok','click', completeTask);

// Adds a new item to the todo list
function addItemTodo(text) {
	var $list = $('ul#todo');
	var $item = $('<li></li>')
	var $paragraph = $('<p>'+ text +'</p>');
	var $btnDel = $('<button class="btn trash"><i class="glyphicon glyphicon-trash"></i></button>');
	var $btnOk = $('<button class="btn ok"><i class="glyphicon glyphicon-ok"></i></button>');
	
	$list.append($item)
	$item.append($paragraph)
	$item.append($btnDel)
	$item.append($btnOk)
	$item.append($btnOk)
}

function removeTask(){
	$itemToRemove = this.closest('li')
	$itemToRemove.remove()
}
function completeTask(){
	var $ul = $('ul#todo');
	var $completeList = $('ul#completed')
	var $itemComplete = this.closest('li')
	var $id = $($itemComplete).parent().attr('id')
	if($id === 'todo'){
		$completeList.append($itemComplete)
	}else{
		$ul.prepend($itemComplete)
	}
	
	
}
	











})