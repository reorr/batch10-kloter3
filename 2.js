function isUnameValid(uname){
	var regex = /^[a-z.]{8}$/;
	if(uname.match(regex)) {
		return true;
	}else{
		return false;
	}
}

isUnameValid('aaaaaaaa'); //true
isUnameValid('aaaaaaa.'); //true
isUnameValid('aaaaaaa'); //false
isUnameValid('aaaa..ab'); //true

function isEmailValid(email){
	var regex = /^[A-Za-z\d.]{4,}@[A-Za-z\d.]+\.[A-Za-z\d]+$/;
	if(email.match(regex)) {
		return true;
	}else{
		return false;
	}
}

isEmailValid('hasbeeazam@gmail.com'); //true
isEmailValid('12sbeeazam@gmail.com'); //true
isEmailValid('has@gmail.com'); //false
isEmailValid('hasB@gmail.com'); //true