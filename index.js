/**
 * Graphology Pagerank
 * ====================
 *
 * JavaScript implementation of the pagerank algorithm for graphology.
 *
 * [Reference]:
 * Page, Lawrence; Brin, Sergey; Motwani, Rajeev and Winograd, Terry,
 * The PageRank citation ranking: Bringing order to the Web. 1999
 */
var isGraph = require('graphology-utils/is-graph'),
    defaults = require('lodash/defaults');

/**
 * Defaults.
 */
var DEFAULTS = {
  attributes: {
    pagerank: 'pagerank',
    weight: 'weight'
  },
  alpha: 0.85,
  tolerance: 1e-6,
  weighted: true
};

/**
 * Abstract function applying the pagerank algorithm to the given graph.
 *
 * @param  {boolean}  assign       - Should we assign the result to nodes.
 * @param  {Graph}    graph        - Target graph.
 * @param  {?object}  option       - Options:
 * @param  {?object}    attributes - Custom attribute names:
 * @param  {?string}      pagerank - Name of the pagerank attribute to assign.
 * @param  {?string}      weight   - Name of the weight algorithm.
 * @param  {?number}  alpha        - Damping parameter.
 * @param  {?number}  tolerance    - Error tolerance when checking for convergence.
 * @param  {?boolean} weighted     - Should we use the graph's weights.
 * @return {object|undefined}
 */
function abstractPagerank(assign, graph, options) {
  if (!isGraph(graph))
    throw new Error('graphology-pagerank: the given graph is not a valid graphology instance.');

  if (graph.multi)
    throw new Error('graphology-pagerank: the pagerank algorithm does not work with MultiGraphs.');

  options = defaults(options, DEFAULTS);
}

/**
 * Exporting.
 */
var pagerank = abstractPagerank.bind(null, false);
pagerank.assign = abstractPagerank.bind(null, true);

module.exports = pagerank;
