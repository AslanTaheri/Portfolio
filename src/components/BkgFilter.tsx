import { useEffect, useRef } from "react";
import SvgFilter from "svg-filter";

function BkgFilter() {
  const svgRef = useRef(null);

  useEffect(() => {
    const filter = new SvgFilter();

    filter
      .append("turbulence")
      .attr("type", "turbulence")
      .attr("baseFrequency", 0.003)
      .attr("numOctaves", 1)
      .attr("width", 0)
      .attr("height", 0)
      .attr("x", 0)
      .attr("y", 0);

    // Apply the filter to the SVG element
    svgRef.current.setAttribute("filter", `url(#${filter.id})`);
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 -z-1">
      <rect className="bg-slate-400 w-screen h-screen -z-1" />

      {/* <circle cx="100" cy="100" r="50" fill="blue" /> */}
    </svg>
  );
}

export default BkgFilter;
