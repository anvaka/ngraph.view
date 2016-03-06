var createView = require('../');
var createGraph = require('ngraph.graph');
var test = require('tap').test;

test('it can create view', function(t) {
  var graph = createGraph();

  graph.addLink(1, 2);
  graph.addLink(1, 3);
  graph.addLink(2, 3);

  // only first two nodes in the view:
  var firstView = createView(graph, [1, 2]);

  t.equals(firstView.getNodesCount(), 2, 'There are only two nodes in the view');
  t.equals(firstView.getLinksCount(), 1, 'And there is just one link');
  t.ok(firstView.hasLink(1, 2), 'First view has link between 1 and 2');

  t.end();
});
