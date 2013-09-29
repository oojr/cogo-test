describe('Rank Controller', function() {
 
  describe('RankCtrl', function(){
 
    it('should create players with 4 Beatles', function() {
      var scope = {},
          ctrl = new RankCtrl(scope);
 
      expect(scope.players.length).toBe(4);
    });
  });
});