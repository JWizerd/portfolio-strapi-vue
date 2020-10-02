export default class {
  constructor(key) {
    this.key = key;
  }
  async random(category) {
    const res = await fetch(this.randomEndpoint(category));
    const photos = await res.json();
    return photos.hits[Math.floor(Math.random() * photos.hits.length)];
  }
  formatCategory(category) {
    return category
      .trim()
      .replace(" ", "+")
      .toLowerCase();
  }
  randomEndpoint(category) {
    category = this.formatCategory(category);
    return `
      https://pixabay.com/api/?key=${this.key}&q=${category}&min_width=1919&min_height=639&orientation=horizontal&safesearch=true`;
  }
}
