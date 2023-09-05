import { useEffect, useRef } from "react";
import SvgFilter from "svg-filter";

function BkgNoise() {
  const svgRef = useRef(null);

  useEffect(() => {
    const filter = new SvgFilter();

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
    filter.composite(noise, white).attr("operator", "xor");

    // Apply the filter to the SVG element
    svgRef.current.setAttribute("filter", `url(#${filter.id})`);
  }, []);

  return (
    <svg ref={svgRef} className="fixed inset-0 h-screen w-screen opacity-80">
      <rect className="h-screen w-screen" />
    </svg>
  );
}

export default BkgNoise;
