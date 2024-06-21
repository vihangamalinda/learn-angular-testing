export class Pokemon {
id: number;
name: string;
description: string;
type: string;
imgSrc: string;

  constructor(
    id: number,
    name: string,
    description: string,
    type: string,
    imgSrc: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.imgSrc = imgSrc;
  }
}