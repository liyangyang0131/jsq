window.onload=function(){
	var sc = document.getElementById('screen');
	var nums = document.getElementsByClassName('num');
	var ops = document.getElementsByClassName('oprator');
	var r = document.getElementById('result');
	var firstNumber='',secondNumber='',fuhao='',opposite='-';
	var ac = document.getElementById('ac');
	var isSame = document.getElementById('isSame');
	var time = document.getElementById('time');
	var mc = document.getElementById('mc'),
		mjia = document.getElementById('m+'),
		mjian = document.getElementById('m-'),
		mr = document.getElementById('mr'),
		more = document.getElementById('more');
	var storNum = '',storResult;

	var setOff = true;
	var setOff2 = true;
	mr.onclick = function(){
		this.style.color = '#ff6700';
		storNum = sc.innerHTML;
	};
	mjia.onclick = function(){
		if(setOff){
			if(!storResult&&storResult!=0){
				storResult = Number(storNum);
			}
			setOff = false;
		}
		storResult += Number(storNum);
		sc.innerHTML = storResult;
	};
	mjian.onclick = function(){
		if(setOff2){
			if(!storResult&&storResult!=0){
				storResult = Number(storNum);
			}
			setOff2 = false;
		}
		storResult -= Number(storNum);
		sc.innerHTML = storResult;
	};
	mc.onclick = function(){
		storNum = '';
		firstNumber = sc.innerHTML;
		mr.style.color = '#fff';
	};
	
	var timeFn = function(){
		var day = new Date();
		if( day.getMinutes()<10 ){
			time.innerHTML = day.getHours()+':0'+day.getMinutes();
		}
		else{
			time.innerHTML = day.getHours()+':'+day.getMinutes();
		}
	};
	timeFn();
	setInterval(timeFn,1000);


    var fn = function(){
		if(fuhao == '+'){
			firstNumber = Number(firstNumber) + Number(secondNumber);
		}
		if(fuhao == '-'){
			firstNumber = Number(firstNumber) - Number(secondNumber);
		}
		if(fuhao == '×'){
			firstNumber = Number(firstNumber) * Number(secondNumber);
		}
		if(fuhao == '÷'){
			firstNumber = Number(firstNumber) / Number(secondNumber);
		}
		if( String(firstNumber).length>8){
			firstNumber = String(firstNumber).slice(0,9);
		}
		sc.innerHTML = firstNumber;
	}

	for(i = 0;i<ops.length;i++){
		ops[i].onmousedown=function(e){
			e.preventDefault();
			this.style.webkitTransform = 'scale(0.9,0.9)';
			if(firstNumber != '' && fuhao == ''){
				fuhao = this.innerHTML.trim();
			}
			else{
				fn();
				fuhao = this.innerHTML.trim();
				secondNumber='';
			}
		};
		ops[i].onmouseup = function(){
			this.style.webkitTransform = 'scale(1,1)';
		};
	}
	for(var i = 0;i<nums.length;i++){
		nums[i].onclick = function(){
			if(fuhao == ''){
				if(firstNumber.length > 8){
					more.style.display = 'block';
					setTimeout(function(){
						more.style.display = 'none';				
					},3000);
					return;
				}
				if(this.innerHTML=='.' && firstNumber.indexOf('.') != -1 || this.innerHTML=='.' && firstNumber == ''){
					return;
				}
				firstNumber += this.innerHTML; 
				sc.innerHTML = firstNumber;
				if(firstNumber == '00'){
					firstNumber = this.innerHTML;
					sc.innerHTML = firstNumber;
				}
				if(firstNumber == '01'||firstNumber == '02'||firstNumber == '03'||firstNumber == '04'||firstNumber == '05'||firstNumber == '06'||firstNumber == '07'||firstNumber == '08'||firstNumber == '09') {
					firstNumber = this.innerHTML;
					sc.innerHTML = firstNumber;
				}
			}else{
				if(secondNumber.length > 8){
					more.style.display = 'block';
					setTimeout(function(){
						more.style.display = 'none';				
					},3000);
					return;
				}
				if(this.innerHTML=='.' && secondNumber.indexOf('.') != -1 || this.innerHTML=='.' && secondNumber == ''){
					return;
				}
				secondNumber += this.innerHTML;
				sc.innerHTML = secondNumber;
				if(secondNumber == '00'){
					secondNumber = this.innerHTML;
					sc.innerHTML = secondNumber;
				}
				if(secondNumber == '01'||secondNumber == '02'||secondNumber == '03'||secondNumber == '04'||secondNumber == '05'||secondNumber == '06'||secondNumber == '07'||secondNumber == '08'||secondNumber == '09') {
					secondNumber = this.innerHTML;
					sc.innerHTML = secondNumber;
				}
			}
		}
		nums[i].onmousedown = function(e){
			e.preventDefault();
		};
	}

	ac.onmousedown = function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		sc.innerHTML = 0;
		firstNumber='';
		secondNumber='';
		fuhao='';
	};
	ac.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};

	r.onmousedown = function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		fn();
		fuhao = '';
		secondNumber = '';
	};
	r.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};

	var kaiguan = true;

	isSame.onmousedown = function(e){
		e.preventDefault();
		this.style.webkitTransform = 'scale(0.9,0.9)';
		if( kaiguan ){
			if(fuhao == ''){
				firstNumber = firstNumber*(-1);
				sc.innerHTML = firstNumber;
				// console.log(firstNumber);
			}else{
				secondNumber = secondNumber*(-1);
				sc.innerHTML = secondNumber;
			}
			kaiguan = false;
		}
		else{
			if(fuhao == ''){
				firstNumber = firstNumber*(-1);
				sc.innerHTML = firstNumber;
			}else{
				secondNumber = secondNumber*(-1); 
				sc.innerHTML = secondNumber;
			}
		}
	};
	isSame.onmouseup = function(){
		this.style.webkitTransform = 'scale(1,1)';
	};

	document.onmousedown = function(e){
		var xx1 = e.clientX;
		document.onmousemove = function(e){
			var xx2 = e.clientX;
			if( (xx2-xx1) < -100){
				location.assign('http://liyangyang0131.github.io/jsq2');
			}
		}
	};
	document.onmouseup = function(){
		document.onmousemove = null;
	}
};