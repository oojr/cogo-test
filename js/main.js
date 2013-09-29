
function RankCtrl($scope){
	$scope.players =
	[               
		{name:'John', score:'40 pts', rank:4},
		{name:'Paul', score:'71 pts', rank:2},
		{name:'George', score:'58 pts', rank:3},
		{name:'Ringo', score: '73 pts', rank:1}]

	$scope.predicate= "+rank";
	

	$scope.addPlayer = function(){

	    var playerScore = $scope.playerText.split(',');
	    
	    var player = playerScore[0];
	    var dartScore = playerScore[1];
	    var position;
	    

	    var dartIntScore = parseInt(dartScore);

	    if (dartIntScore == 1){
	    	dartScore += " pt";
	    }else{
	    	dartScore += " pts"
	    } 

        
       //Standard Competition Ranking
       //http://en.wikipedia.org/wiki/Ranking#Standard_competition_ranking_.28.221224.22_ranking.29

        position = 1;
	    
	    angular.forEach($scope.players, function(player){
	    	
	    	if(dartIntScore > parseInt(player.score)){
	    		player.rank +=1;
	    		position +=0;

           }
	    	else if(dartIntScore < parseInt(player.score)){
	    		player.rank +=0;
	    		position +=1;
	    	}


	    })
         
		$scope.players.push({name:player, score:dartScore, rank:position} );

		$scope.playerText =" ";
	}

	$scope.clearRank = function(){
		$scope.players = [];
	}
}

