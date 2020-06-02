import autobind from 'autobind-decorator';
import { action, observable, reaction } from 'mobx';

export interface IPage {
  nav: boolean;
  clickedIdx: number
}

export const initialPage: IPage = {
  nav : true,
  clickedIdx: 0,
};

@autobind
class PageStore {
  @observable nav: boolean = false;
  @observable clickedIdx: number = 0;
  @observable modal: boolean = false;

  constructor(initialData = initialPage, root: any) {
      this.nav = initialData.nav;
      this.clickedIdx = initialData.clickedIdx;
  }

  @action
  getClickedIdx() {
    return this.clickedIdx;
  }

  @action
  setClickedIdx(idx: number) {
    this.clickedIdx = idx;
  }

  @action
  toggleModal(){
    this.modal = !this.modal;
  }
}

export default PageStore;
