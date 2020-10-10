import React from 'react';

import Category from './Category/Category';

import Sofa from '../../components/UI/SVG/Categories/Sofas';
import Beds from '../../components/UI/SVG/Categories/Beds';
import Dining from '../../components/UI/SVG/Categories/Dining';
import TVUnits from '../../components/UI/SVG/Categories/TVUnits';
import Mattresses from '../../components/UI/SVG/Categories/Mattresses';
import Seating from '../../components/UI/SVG/Categories/Seating';
import CoffeeTables from '../../components/UI/SVG/Categories/CoffeeTables';
import Cupboards from '../../components/UI/SVG/Categories/Cupboards';
import Recliners from '../../components/UI/SVG/Categories/Recliners';
import Storage from '../../components/UI/SVG/Categories/Storage';
import Study from '../../components/UI/SVG/Categories/Study';
import Bookshelves from '../../components/UI/SVG/Categories/Bookshelves';
import ShoeRacks from '../../components/UI/SVG/Categories/ShoeRacks';
import Decor from '../../components/UI/SVG/Categories/Decor';
import AllFurniture from '../../components/UI/SVG/Categories/AllFurniture';

import classes from './Categories.module.css';


const categories = () => (
    <section className={classes.Categories}>
        <div className={classes.Title}>Explore Our Furniture Range</div>
        <div className={classes.CategoryItems}>
            <Category svg={<Sofa />}>Sofa</Category>
            <Category svg={<Beds />}>Beds</Category>
            <Category svg={<Dining />}>Dining</Category>
            <Category svg={<TVUnits />}>TV Units</Category>
            <Category svg={<Mattresses />}>Mattresses</Category>
            <Category svg={<Seating />}>Seating</Category>
            <Category svg={<CoffeeTables />}>Coffee Tables</Category>
            <Category svg={<Cupboards />}>Cupboards</Category>
            <Category svg={<Recliners />}>Recliners</Category>
            <Category svg={<Storage />}>Storage</Category>
            <Category svg={<Study />}>Study</Category>
            <Category svg={<Bookshelves />}>Bookshelves</Category>
            <Category svg={<ShoeRacks />}>Shoe Racks</Category>
            <Category svg={<Decor />}>Decor</Category>
            <Category svg={<AllFurniture />}>All Furniture</Category>
        </div>
    </section>
);

export default categories;