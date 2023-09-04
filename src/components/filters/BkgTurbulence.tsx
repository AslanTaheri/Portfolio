import { useEffect, useRef } from "react";
import SvgFilter from "svg-filter";

function BkgTurbulence() {
  const svgRef = useRef(null);

  useEffect(() => {
    const filter = new SvgFilter();

    filter
      .append("turbulence")
      .attr("type", "turbulence")
      .attr("baseFrequency", 0.001)
      .attr("numOctaves", 1)
      // .attr("width", 200)
      // .attr("height", 100)
      .attr("x", 0)
      .attr("y", 0);

    // Apply the filter to the SVG element
    svgRef.current.setAttribute("filter", `url(#${filter.id})`);
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 h-screen w-screen">
      <rect className="h-screen w-screen bg-slate-400" />
    </svg>
  );
}

export default BkgTurbulence;
