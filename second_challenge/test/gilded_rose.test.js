const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should return the name of the item", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0), new Item("bar", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[1].name).toEqual("bar");
  });

  it("should reduce the quality by double as is past sellIn date", function () {
    const gildedRose = new Shop([new Item("foo", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
  });

  it("should return not go below 0 for quality even though out of date", function () {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of Aged Brie ", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("should increase the quality of Aged Brie 2", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("should not increase quality above 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("should not decrease the quality of Sulfuras, Hand of Ragnaros", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
  });

  it("should increase quality of Backstage passes by 2 within 10 days of the concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 34),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(36);
  });

  it("should increase quality of Backstage passes by 3 within 5 days of the concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 34),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(37);
  });

  it("should reduce quality of Backstage passes to 0 after concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase quality of Backstage passes by 2 within 10 days of the concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 8, 34),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(36);
  });

  it("should increase quality of Backstage passes by 3 within 5 days of the concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 34),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(37);
  });

  it("should reduce quality of Backstage passes to 0 after concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
});
