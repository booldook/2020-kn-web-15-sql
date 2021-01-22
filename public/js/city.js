function onSave(f) {
	if(f.name.value.trim() == "") {
		alert('도시명은 필수정보 입니다.');
		f.name.focus();
		return false;
	}
	return true;
}

function onRemove(id) {
	if(confirm('삭제하시겠습니까?')) {
		location.href = '/city/remove/'+id;
	}
}