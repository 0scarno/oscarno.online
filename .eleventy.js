import { DateTime } from "luxon";
//const { DateTime } = require("luxon");

export default function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("bundle.css");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate({includeOffset: false});
    })
    // Change title to include page title & symbol
    eleventyConfig.addFilter("titleFilter", (pageTitle) => {
        return "⌀ "+(pageTitle)
    })

    eleventyConfig.addCollection("postDateSort", function (collectionsApi) {
        return collectionsApi.getFilteredByTags("journal").sort(function(a,b) {
            //return a.date - b.date; // sort by date - ascending
			return b.date - a.date; // sort by date - descending
			//return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
			//return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
        })
    })

    eleventyConfig.addCollection("project", function (collectionApi) {
        return collectionApi
        .getAllSorted()
        .filter((item) => 
            item.inputPath.startsWith ("./projects/") &&
            item.inputPath.split("/").pop() == "index.njk"
        );
    });

    eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
};

export const config = {
    dir:{
        input:".",
        output: "docs" // Output to docs folder rather than _site
    }
}