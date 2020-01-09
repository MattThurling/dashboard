import React, { Component } from 'react'
import * as d3 from 'd3'


class Tree extends Component {


    componentDidMount() {
      

        function parseData(obj) {
          let a = obj.ingredients
          let b = []
          a.forEach((i) => {
            var o = {"name": i}
            b.push(o)
          })

          console.log(b)

          // (obj.ingredients).forEach((ing) => console.log(ing))

          let e = {
            "name": "📦",
            "children": [
              {"name": "title"},
              {"name": "ingredients", "children": b},
              {"name": "nutrition"},
              {"name": "quantities"},
              {"name": "packaging"}
              ]
            }
          return e
        }


        // ****************************
        // D3 Code to create the chart
        // using this._rootNode as container
        const margin = ({top: 10, right: 120, bottom: 10, left: 40})
        const width = 1920// temp hard code
        const dy = width / 6
        const dx = 30
        const tree = d3.tree().nodeSize([dx, dy])
        const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x)

        const root = d3.hierarchy(parseData(this.props.data));
        console.log(root)
        root.x0 = dy / 2;
        root.y0 = 0;
        root.descendants().forEach((d, i) => {
            d.id = i;
            d._children = d.children;
            if (d.depth && d.data.name.length !== 7) d.children = null;
        });

        // select the main svg viewbox (created by React's first and only render)
        const svg = d3.select(".viz").append("svg")
            .attr("viewBox", [-margin.left, -margin.top, width, dx])
            .style("font", "10px sans-serif")
            .style("user-select", "none");

        console.log('Empty svg: ' + svg)

        // append a new element (grouped) to the svg, a link 
        const gLink = svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5);

        // append a new element to the svg, a new node
        const gNode = svg.append("g")
            .attr("cursor", "pointer")
            .attr("pointer-events", "all");


        // update all the nodes and links
        function update(source) {
            const duration = d3.event && d3.event.altKey ? 2500 : 250;
            const nodes = root.descendants().reverse();
            const links = root.links();

            // Compute the new tree layout.
            tree(root);

            let left = root;
            let right = root;
            root.eachBefore(node => {
              if (node.x < left.x) left = node;
              if (node.x > right.x) right = node;
            });

            const height = right.x - left.x + margin.top + margin.bottom;

            const transition = svg.transition()
                .duration(duration)
                .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
                .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

            // Update the nodes…
            const node = gNode.selectAll("g")
              .data(nodes, d => d.id);

              console.log('node: ' + node)

            // Enter any new nodes at the parent's previous position.
            const nodeEnter = node.enter().append("g")
                .attr("transform", d => `translate(${source.y0},${source.x0})`)
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0)
                .on("click", d => {
                  d.children = d.children ? null : d._children;
                  update(d);
                });

            nodeEnter.append("circle")
                .attr("r", 7)
                .attr("fill", d => d._children ? "lightsteelblue" : "#999")
                .attr("stroke-width", 10);

            nodeEnter.append("text")
                .style("font-size", "18px")
                .attr("dy", "0.31em")
                .attr("x", d => d._children ? -12 : 12)
                .attr("text-anchor", d => d._children ? "end" : "start")
                .text(d => d.data.name)
              .clone(true).lower()
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
                .attr("stroke", "white");

            // Transition nodes to their new position.
            const nodeUpdate = node.merge(nodeEnter).transition(transition)
                .attr("transform", d => `translate(${d.y},${d.x})`)
                .attr("fill-opacity", 1)
                .attr("stroke-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            const nodeExit = node.exit().transition(transition).remove()
                .attr("transform", d => `translate(${source.y},${source.x})`)
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0);

            console.log('nodeUpdate: ' + nodeUpdate)
            console.log('nodeExit: ' + nodeExit)

            // Update the links…
            const link = gLink.selectAll("path")
              .data(links, d => d.target.id);

            // Enter any new links at the parent's previous position.
            const linkEnter = link.enter().append("path")
                .attr("d", d => {
                  const o = {x: source.x0, y: source.y0};
                  return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.merge(linkEnter).transition(transition)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition(transition).remove()
                .attr("d", d => {
                  const o = {x: source.x, y: source.y};
                  return diagonal({source: o, target: o});
                });

            // Stash the old positions for transition.
            root.eachBefore(d => {
              d.x0 = d.x;
              d.y0 = d.y;
            });
        }

        update(root);

        console.log(svg.node())
        
    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return(<div className="viz" ref={this._setRef.bind(this)} />)
    }
}

export default Tree
