
let player2 = 100;
let player1 = 100;
document.getElementById("player2").innerHTML = player2;
document.getElementById("player1").innerHTML = player1;
//-------------------------------------Progress-Bar-1-INICIO-------------------------------------------------------------------
function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
  updateProgressBar(myProgressBar, player1);
//-------------------------------------Progress-Bar-1-FINAL-------------------------------------------------------------------

//-------------------------------------Progress-Bar-2-INICIO-------------------------------------------------------------------
function updateProgressBar2(progressBar2, value2) {
    value2 = Math.round(value2);
    progressBar2.querySelector(".progress__fill2").style.width = `${value2}%`;
    progressBar2.querySelector(".progress__text2").textContent = `${value2}%`;
  }
  
  const myProgressBar2 = document.querySelector(".progress2");
  
  /* Example */
  updateProgressBar2(myProgressBar2, player2);
//-------------------------------------Progress-Bar-2-FINAL-------------------------------------------------------------------
function shuffle(array){
    var currentIndex = array.length,
        randomIndex;
    
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[currentIndex],
                array[currentIndex],
            ];
        }
        return array;
    
    }
    		//-------------------------------------Roleta 1-------------------------------------------------------------------
    function spin(){
        wheel.play();
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        let SelectItem = "";
		  
        let AC = shuffle([1890,2250,2610]);
    
        let Camera = shuffle([2850,2210,2570]);
    
        let Zonk = shuffle([1770,2130,2490]);
    
        let Ps = shuffle([1810,2170,2530]);
    
        let Headset = shuffle([1750,2110,2470]);
    
        let Drone = shuffle([1630,1990,2350]);
    
        let Rog = shuffle([1570,1930,2290]);
    
        let results = shuffle([
            AC[0],
            Camera[0],
            Ps[0],
            Zonk[0],
            Headset[0],
            Drone[0],
            Rog[0],
        
        
          ])
		  
          if(AC.includes(results[0])) SelectItem = "30", player2 = player2 - 30;
		 
          if(Camera.includes(results[0])) SelectItem = "40", player2 = player2 - 40;
		
          if(Ps.includes(results[0])) SelectItem = "50", player2 = player2 - 50;
	
          if(Zonk.includes(results[0])) SelectItem = "IK", player2 = player2 - 100;
		
          if(Headset.includes(results[0])) SelectItem = "60", player2 = player2 - 60;
	
          if(Drone.includes(results[0])) SelectItem = "90", player2 = player2 -90;
		
          if(Rog.includes(results[0])) SelectItem = "20", player2 = player2- 20;
		 
    
		  console.log(player2)

          box.style.setProperty("transition", "all ease 5s");
          box.style.transform = "rotate(" + results[0] + "deg)";
          element.classList.remove("animate");
          setTimeout(function(){
                element.classList.add("animate");
    
          },5000);

          setTimeout(function(){
			document.getElementById("player2").innerHTML = player2;
			updateProgressBar2(myProgressBar2, player2);
            Swal.fire({
                title: 'Damage',
                html: 'voce causou '+ SelectItem + ' de dano ao player 2 ' ,
                imageUrl: 'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-frontal-attack-yellow-fist-transparent-png-image_1328081.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
				
              })
          }, 5500)

		

          setTimeout(function(){
            box.style.setProperty("transition", "initial");
            box.style.transform = "rotate(90deg)";
    
          }, 6000);
		  if(player2  <= 0 ){
			setTimeout(function(){
				player1 = 100;
				player2 = 100;
				document.getElementById("player2").innerHTML = player2;
				document.getElementById("player1").innerHTML = player1;
				updateProgressBar2(myProgressBar2, player2);
				updateProgressBar(myProgressBar, player1);
				Swal.fire({
					title: 'YOU WIN',
					html: 'PLAYER ONE WIN, WELLL DONE '+  '' ,
					imageUrl: 'https://images.squarespace-cdn.com/content/v1/55806048e4b014e817c47363/1435939584513-MZJO1MJ7MIIUUFS1RUJA/Victory+logo1+%5BConverted%5D.png?format=1500w',
					imageWidth: 400,
					imageHeight: 200,
					imageAlt: 'Custom image',
					
				  })
			  }, 5500)

		  };
    }

	function shuffle(array){
		var currentIndex = array.length,
			randomIndex;
		
			while(0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;
				[array[currentIndex], array[randomIndex]] = [
					array[currentIndex],
					array[currentIndex],
				];
			}
			return array;
		
		}
		//-------------------------------------Roleta 2-------------------------------------------------------------------
		function spin2(){
			wheelB.play();
			const box = document.getElementById("box-B");
			const element = document.getElementById("mainbox-B");
			let SelectItem = "";

			//Variaveis para a função Shuffle
			let AC = shuffle([1890,2250,2610]);
		
			let Camera = shuffle([2850,2210,2570]);
		
			let Zonk = shuffle([1770,2130,2490]);
		
			let Ps = shuffle([1810,2170,2530]);
		
			let Headset = shuffle([1750,2110,2470]);
		
			let Drone = shuffle([1630,1990,2350]);
		
			let Rog = shuffle([1570,1930,2290]);
		
			let results = shuffle([
				AC[0],
				Camera[0],
				Ps[0],
				Zonk[0],
				Headset[0],
				Drone[0],
				Rog[0],
			
			
			  ])
			  //Aleteração das variaveis

			  if(AC.includes(results[0])) SelectItem = "30", player1 = player1 - 30;
			  if(Camera.includes(results[0])) SelectItem = "40", player1 = player1 - 40;
			  if(Ps.includes(results[0])) SelectItem = "50", player1 = player1 - 50;
			  if(Zonk.includes(results[0])) SelectItem = "IK", player1 = player1 - 100;
			  if(Headset.includes(results[0])) SelectItem = "60", player1 = player1 - 60;
			  if(Drone.includes(results[0])) SelectItem = "90", player1 = player1 - 90;
			  if(Rog.includes(results[0])) SelectItem = "20", player1 = player1 - 20;

			  console.log(player1)
		
			  box.style.setProperty("transition", "all ease 5s");
			  box.style.transform = "rotate(" + results[0] + "deg)";
			  element.classList.remove("animate");
			  setTimeout(function(){
					element.classList.add("animate");
		
			  },5000);
			  setTimeout(function(){
				  //________________________________________Update das variaveis________________________________________
				document.getElementById("player1").innerHTML = player1;
				updateProgressBar(myProgressBar, player1);
				Swal.fire({
					title: 'Damage',
					html: 'voce deu '+ SelectItem + ' de dano ao player 1 ' ,
					imageUrl: 'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-frontal-attack-yellow-fist-transparent-png-image_1328081.jpg',
					imageWidth: 400,
					imageHeight: 200,
					imageAlt: 'Custom image',
				  })
			  }, 5500)
			  setTimeout(function(){
				box.style.setProperty("transition", "initial");
				box.style.transform = "rotate(90deg)";
		
			  }, 6000);
			  if(player1  <= 0 ){
				setTimeout(function(){
					player1 = 100;
					player2 = 100;

					document.getElementById("player2").innerHTML = player2;
				document.getElementById("player1").innerHTML = player1;
				updateProgressBar2(myProgressBar2, player2);
				updateProgressBar(myProgressBar, player1);
				
					Swal.fire({
						title: 'Niece',
						html: 'PLAYER TWO WIN, WELLL DONE '+  '' ,
						imageUrl: 'https://images.squarespace-cdn.com/content/v1/55806048e4b014e817c47363/1435939584513-MZJO1MJ7MIIUUFS1RUJA/Victory+logo1+%5BConverted%5D.png?format=1500w',
						imageWidth: 400,
						imageHeight: 200,
						imageAlt: 'Custom image',
					  })
				  }, 5500)
	
			  };
		}