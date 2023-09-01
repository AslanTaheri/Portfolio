import { useEffect, useRef } from "react";
import SvgFilter from "svg-filter";

function BkgFilter() {
  const svgRef = useRef(null);

  useEffect(() => {
    const filter = new SvgFilter();

    filter
      .append("turbulence")
      .attr("type", "turbulence")
      .attr("baseFrequency", 0.03)
      .attr("numOctaves", 5)
      .attr("width", 100)
      .attr("height", 100)
      .attr("x", 50)
      .attr("y", 50);

    // Apply the filter to the SVG element
    svgRef.current.setAttribute("filter", `url(#${filter.id})`);
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 -z-1">
      <rect className="bg-slate-400 w-full h-full" />

      {/* <circle cx="100" cy="100" r="50" fill="blue" /> */}
    </svg>
  );
}

export default BkgFilter;
