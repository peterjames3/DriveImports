//barrel file
import { blogType } from './components/blogType'
import { authorType } from './components/authorType';
import { blogCategoryType} from './components/blogCategoryType';
import { productType } from "./components/productType";
import { categoryType } from "./components/categoryType";
import { trendingType } from "./components/trendingType";
import { customerReviewType } from "./components/customerReviewTypes";
import { homePageType } from './pages/homePageType';
import { heroType } from "./components/heroType";
import { aboutUsPageType } from './pages/aboutUsPageType';
import { servicesPageType } from './pages/servicesPageType';
//import { homePageType } from "./homePageType";
//import { textWithIllustrationType } from './textWithIllustratonType'



export const schemas = {
  homePageType,
  aboutUsPageType,
  servicesPageType,
  heroType,
  authorType,
  blogCategoryType,
  blogType,
  productType,
  trendingType,
  categoryType,
  customerReviewType,
};
