function indexOf(substr, str) {
	var sublen = substr.length,
	strlen = str.length,
	i = 0,
	j = 0;

	while(i < strlen) {
		while(str.charAt(i) === substr.charAt(j) && j < sublen) {
			i++;
			j++;
		} 
		if(j === sublen){
			return i - j;
		}
		i = i - j + 1;
		j = 0;
	}
	return -1;
}
