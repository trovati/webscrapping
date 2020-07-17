const parser = require("../parser");
const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require("process");
let html;
let listings;


beforeAll(() => {
    html = fs.readFileSync("./test.html");
    listings = parser.listings(html);
});



it("should give the correct number of listings", () => {
    expect(listings.length).toBe(120);
});

it("should get hood from listings", () => {
    expect(listings[0].hood).toBe("");
});

it("should get correct date from listings", () => {
    expect(listings[0].datePosted).toStrictEqual(new Date("2020-07-16T20:28:00.000Z"));
});

it("should get correct url", () => {
    expect(listings[0].url).toBe("https://sfbay.craigslist.org/eby/muc/d/san-ramon-looking-to-form-power-metal/7160687600.html");
});

it("should get correct title", () => {
    expect(listings[0].title).toBe("Looking to form power metal band in East bay.");
});




