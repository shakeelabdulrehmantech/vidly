import _ from "lodash";

export class Paginate {
  paginateItems(items: any, pageNumber: number, pageSize: number) {
    const itemStartIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(itemStartIndex)
      .take(pageSize)
      .value();
  }
}
