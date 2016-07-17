function LinkedList(){
	this.head = null;
	this.size = 0;
}

LinkedList.prototype.add = function(val){
	var node = {
		data: val,
		next: null
	};
	if(this.head == null){
		this.head = node;
	} else {
		var temp = this.head;
		while(temp.next != null){
			temp = temp.next;
		}
		temp.next = node;
	}
	this.size++;
}

LinkedList.prototype.toString = function(){
	var result = [];
	var temp = this.head;
	while(temp != null){
		result.push(temp.data);
		temp = temp.next;
	}

	return result.toString();
}
