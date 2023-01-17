$(".Reeses-Puffs").hide();
$(".Cinnamon-Crunch").hide();
$(".Fruity-Pebbles").hide();
$(".Raisin-Bran").hide();
let count;
count=0;
$(".Results").click(function(){
    count=count+1;
    $(".Test-count").show("slow");
    $(".Test-count").text("How many times youve taken this test: "+count+" times");
    $(".Result-output").show("slow");
    
    var socialR = Number($(".Social-Skill").val());
    var season = $(".Birth-month").val();
     $(".Result-output").text("Because your favorite season is " + season +" and your social level is " + socialR+ ",Your Result is, " );
    if(socialR <= 3 && season==="Fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand. Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 3 && season==="fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 3 && season==="Summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 3 && season==="summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 3 && season==="Winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
        
    else if(socialR <= 3 && season==="winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 3 && season==="Spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 3 && season==="spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 6 && season==="Summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 6 && season==="summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 6 && season==="fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 6 && season==="Fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 6 && season==="Spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 6 && season==="spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 6 && season==="Winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 6 && season==="winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 8 && season==="Fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 8 && season==="fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
    	$(".Raisin-Bran").show("slow");
        $(".Result-output").append("Raisin Brand Description: You.... You could do better in many areas in life and should really work on yourself as a person. Cause nobody likes raisin brand :/");}
    
    else if(socialR <= 8 && season==="Summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 8 && season==="summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 8 && season==="Spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 8 && season==="spring"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 8 && season==="Winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else if(socialR <= 8 && season==="winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else if(socialR <= 10 && season==="Fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
   
    else if(socialR <= 10 && season==="fall"){
        $(".Cereal-Bunch").hide("slow");
        $(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    	$(".Fruity-Pebbles").show("slow");
        $(".Result-output").append("Fruity Pebbles Description: Youre a very energetic and lively person with a lot of energy at the start of the day but normally quickly get soggy or tired throughout the day.");}
    
    else if(socialR <= 10 && season==="Summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 10 && season==="summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
    	$(".Cinnamon-Crunch").show("slow");
        $(".Result-output").append("Cinnamon Toast Crunch, Description: Youre a sweet person whos a little rough around the edges but still loved by all of those around you");}
    
    else if(socialR <= 10 && season==="Winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else if(socialR <= 10 && season==="winter"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else if(socialR <= 10 && season==="Summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else if(socialR <= 10 && season==="summer"){
        $(".Cereal-Bunch").hide("slow");
        $(".Cinnamon-Crunch").hide("slow");
	$(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    	$(".Reeses-Puffs").show("slow");
        $(".Result-output").append("Reeses Puffs Description: Youre at the top of your class and the top of your friend group, Youre very well rounded and You make those around you better as people as well.");}
    
    else{
    $(".Result-output").text("Please Reset and Try Again");}
    
    

});
$(".reset").click(function(){
    count=0;
    $(".Fruity-Pebbles").hide("slow");
	$(".Raisin-Bran").hide("slow");
    $(".Reeses-Puffs").hide("slow");
	$(".Cinnamon-Crunch").hide("slow");
    $(".Cereal-Bunch").show("slow");
    $(".Test-count").hide("slow");
    $(".Result-output").hide("slow");
    });