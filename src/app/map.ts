export class Map {
  id: number;
  name: string;
  dir: string;
  imgComp: string;
  imgEmpty: string;
  height: number;
  width: number;


  public getFullPathImage(): string {
    const fullpath = 'http://amicabile.com/javascript/geoclick/maps/' + this.dir + this.imgComp;
    console.log(fullpath);
    return fullpath;
  }
}
