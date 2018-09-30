/**
 * Represents the size of an image.
 */
export class Size {
  constructor(key) {
    this.key = key;
  }
}

/**
 * Represents an object image.
 */
export class Image {
  constructor(
    title,
    link,
    media,
    dateTaken,
    description,
    published,
    author,
    authorId,
    tags
  ) {
    this.title = title;
    this.link = link,
    this.media = media,
    this.dateTaken = dateTaken,
    this.description = description,
    this.published = published,
    this.author = author,
    this.authorId = authorId,
    this.tags = tags
  }
}
