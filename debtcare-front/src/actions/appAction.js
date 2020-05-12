import Constants from "~/helpers/enums/Constants";

const changePageName = (value) => ({
  type: Constants.CHANGE_PAGE_NAME,
  pageInfo: value,
});

export default {
  changePageName,
};
