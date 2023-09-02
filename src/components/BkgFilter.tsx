import { useEffect, useRef } from "react";
import SvgFilter from "svg-filter";

function BkgFilter() {
  const svgRef = useRef(null);

  useEffect(() => {
    const filter = new SvgFilter();

    const bg = filter
      .append("turbulence")
      .attr("type", "turbulence")
      .attr("baseFrequency", 0.003)
      .attr("numOctaves", 1)
      // .attr("width", 200)
      // .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0)
      .to("blend")
      .attr("mode", "exclusion");
    const noise = filter
      .append("turbulence")
      .attr("type", "fractalNoise")
      .attr("baseFrequency", 0.6)
      .attr("numOctaves", 1)
      // .attr("width", 200)
      // .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0);
    const white = filter
      .append("flood")
      .attr("color", "#FFFFFF")
      .attr("opacity", 1);
    const whiteGrain = filter.composite(noise, white).attr("operator", "xor");
    // Merge filters together
    filter.merge(bg, noise);
    console.log(filter);
    // Apply the filter to the SVG element
    svgRef.current.setAttribute("filter", `url(#${filter.id})`);
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 h-screen w-screen">
      <rect className="h-screen w-screen bg-slate-400" />
    </svg>
  );
}

export default BkgFilter;
