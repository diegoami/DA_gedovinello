export class Map {
  id: number;
  name: string;
  dir: string;
  imgComp: string;
  imgEmpty: string;
  height: number;
  width: number;
  hotspotFiles: string[];


  public getFullPathImage(): string {
    const fullpath = 'assets/maps/' + this.dir + this.imgComp;
    console.log(fullpath);
    return fullpath;
  }
}
