describe('Ranking App', function() {
 
  describe('Ranking List', function() {
 
    beforeEach(function() {
      browser().navigateTo('index.html');
    });
 
 
    it('should add a name to the rank', function() {
 
      input('query').enter('Mick Jagger, 70');
      expect(repeater('#rankings li').count()).toBe(5);
 
      
    });
    /*it('should be ordered by rank', function() {
        expect(binding('predicate')).toBe('+rank');
      expect(repeater('table.players', 'player in players').column('player.rank')).
        toEqual(['1', '2', '3', '4', '5']);
        expect(repeater('table.friend', 'friend in friends').column('friend.name')).
    toEqual(['Ringo', 'Paul', 'Mick Jagger', 'George', 'John']);
}); */
  });
});