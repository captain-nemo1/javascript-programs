function Stack(){
	this.stack = [];
	this.size = 0;
}

Stack.prototype.push = function(ele){
	this.stack.push(ele);
	this.size++; 
}

Stack.prototype.pop = function(){
	this.size--; 
	return this.stack.pop();
}
