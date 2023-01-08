import React from "react";

function PlanUpperChevronSVG({ expand }) {
    return (
        <svg className={`absolute top-4 left-12 transition-all ${expand ? "rotate-0" : "rotate-180"}`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.6661 6.5002C13.9915 6.82562 13.9915 7.35328 13.6661 7.6787C13.3406 8.00412 12.813 8.00412 12.4876 7.6787L7.58867 2.77978C7.26326 2.45437 6.73559 2.45437 6.41017 2.77978L1.51125 7.6787C1.18584 8.00412 0.658173 8.00412 0.332756 7.6787C0.00733918 7.35328 0.0073392 6.82562 0.332756 6.5002L6.41017 0.422792C6.73559 0.0973502 7.26326 0.0973502 7.58867 0.422792L13.6661 6.5002Z" fill="#5E46F8" />
        </svg>
    );
}

export default PlanUpperChevronSVG;
