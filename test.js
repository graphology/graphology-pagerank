/**
 * Graphology Utils Unit Tests
 * ============================
 */
var assert = require('assert'),
    Graph = require('graphology'),
    pagerank = require('./');

describe('graphology-pagerank', function() {
  it('should throw if provided with something which is not a graph.', function() {
    assert.throws(function() {
      pagerank({hello: 'world'});
    }, /graphology/);
  });

  it('should throw if provided with a MultiGraph.', function() {
    assert.throws(function() {
      var graph = new Graph({multi: true});
      pagerank(graph);
    }, /multi/i);
  });

});
