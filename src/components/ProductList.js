import React, { Fragment } from 'react'
import { List, CardContent, Chip, Tooltip } from '@material-ui/core'
import ProductListItem from './ProductListItem'

export default props => {

    const products = [{
          "image": "http://img.tesco.com/Groceries/pi/994/5053526772994/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 52399427,
          "ContentsMeasureType": "G",
          "name": "Tesco 12 Beef Meatballs 336G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.476,
          "description": ["Seasoned beef meatballs.", "From Trusted British Farms. We work in partnership with trusted farmers to ensure high welfare standards from farm to fork, to deliver great quality beef."],
          "UnitQuantity": "KG",
          "id": 281974465,
          "ContentsQuantity": 336,
          "department": "Fresh Meat & Poultry",
          "price": 2.0,
          "unitprice": 5.96
        }, {
          "image": "http://img.tesco.com/Groceries/pi/226/5052004648226/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 51042638,
          "ContentsMeasureType": "G",
          "name": "Tesco Buttered Chicken Breast Joint 640G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.832,
          "description": ["Boneless chicken breast joint topped with butter and seasoning.", "Basted with butter for succulence, and seasoned for a fuller flavour"],
          "UnitQuantity": "KG",
          "id": 266508874,
          "ContentsQuantity": 640,
          "department": "Fresh Meat & Poultry",
          "price": 5.0,
          "unitprice": 7.82
        }, {
          "image": "http://img.tesco.com/Groceries/pi/966/5054402524966/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 76016914,
          "ContentsMeasureType": "G",
          "name": "Tesco Finest 20 Mini Meatballs 336G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.608,
          "description": ["20 Scotch mini beef meatballs, lightly seasoned.", "20 Beef Mini Meatballs"],
          "UnitQuantity": "KG",
          "id": 286694229,
          "ContentsQuantity": 336,
          "department": "Fresh Meat & Poultry",
          "price": 2.85,
          "unitprice": 8.49
        }, {
          "image": "http://img.tesco.com/Groceries/pi/690/5057545714690/IDShot_90x90.jpg",
          "superDepartment": "Frozen Food",
          "tpnb": 84619532,
          "ContentsMeasureType": "G",
          "name": "Tesco Pork Sausage Meat 400G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.425,
          "description": ["Seasoned pork sausage meat.", "Succulent pork sausage meat, carefully seasoned for a full flavour"],
          "UnitQuantity": "KG",
          "id": 299587240,
          "ContentsQuantity": 400,
          "department": "Christmas Frozen Food",
          "price": 1.25,
          "unitprice": 3.13
        }, {
          "image": "http://img.tesco.com/Groceries/pi/987/5057545843987/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 84798177,
          "ContentsMeasureType": "G",
          "name": "Eastman's Cooked Beef Slices 125G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.122,
          "description": ["Sliced, cooked reformed beef with added water.", "Exclusively at TESCO EASTMAN'S DELI FOODS \"Proper Tasty\" 10 Slices"],
          "UnitQuantity": "100G",
          "id": 299927673,
          "ContentsQuantity": 125,
          "department": "Cooked Meats, Sandwich Fillers & Deli",
          "price": 0.8,
          "unitprice": 0.64
        }, 
        {
          "image": "http://img.tesco.com/Groceries/pi/945/5051898684945/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 50668153,
          "ContentsMeasureType": "G",
          "name": "Tesco Breaded Chicken Steaks 4 Pack 505G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.721,
          "description": ["Chopped and shaped chicken breast in a crispy breadcrumb coating.", "For stress free teatimes rustle up chicken steaks made with 100% chicken breast. Generously coated in golden breadcrumbs for a crispy texture and oven cooked in just 25 minutes. These tasty bites make a quick and easy family favourite. For a fun family meal serve your chicken steaks in soft burger buns with lettuce, cheese slices and tomato ketchup. Click the Recipes tab at the top of this page to find inspiration for delicious homemade sides. Expertly selected for freshness and quality."],
          "UnitQuantity": "KG",
          "id": 264567506,
          "ContentsQuantity": 505,
          "department": "Fresh Meat & Poultry",
          "price": 2.75,
          "unitprice": 5.45
        }, {
          "image": "http://img.tesco.com/Groceries/pi/553/5052320400553/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 51039764,
          "ContentsMeasureType": "KG",
          "name": "Tesco 2 Hunters Chicken Breasts 430G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.526,
          "description": ["Skinless chicken breast fillets with smoked dry cure bacon, Cheddar and Red Leicester cheese and a smoky barbecue sauce.", "Hand wrapped in bacon, topped with cheese and sweet, smoky BBQ sauce"],
          "UnitQuantity": "KG",
          "id": 268236846,
          "ContentsQuantity": 0.43,
          "department": "Fresh Meat & Poultry",
          "price": 3.75,
          "unitprice": 8.73
        }, {
          "image": "http://img.tesco.com/Groceries/pi/524/5057545864524/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 84802283,
          "ContentsMeasureType": "G",
          "name": "Eastman's Pork Luncheon Meat 250G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.275,
          "description": ["Sliced, cured and cooked reformed pork with added water and spices.", "20 Slices"],
          "UnitQuantity": "100G",
          "id": 299955800,
          "ContentsQuantity": 250,
          "department": "Cooked Meats, Sandwich Fillers & Deli",
          "price": 0.8,
          "unitprice": 0.32
        }, {
          "image": "http://img.tesco.com/Groceries/pi/819/5053526970819/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 64760373,
          "ContentsMeasureType": "G",
          "name": "Tesco Lamb Diced Leg 300G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.451,
          "description": ["Diced lamb Leg.", "From Trusted Farms, our lamb is fed on a grass based diet and cared for with high welfare standards to ensure great quality and flavoursome lamb"],
          "UnitQuantity": "KG",
          "id": 282524801,
          "ContentsQuantity": 300,
          "department": "Fresh Meat & Poultry",
          "price": 4.0,
          "unitprice": 13.34
        }, {
          "image": "http://img.tesco.com/Groceries/pi/993/5018374928993/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 52251648,
          "ContentsMeasureType": "G",
          "name": "Tesco Beef Lean Steak Mince 500G 5% Fat",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.581,
          "description": ["Lean beef steak mince 5% fat.", "From Trusted Northern Irish Farms. We work in partnership with trusted farmers to ensure high welfare standards from farm to fork, to deliver great quality beef."],
          "UnitQuantity": "KG",
          "id": 250871426,
          "ContentsQuantity": 500,
          "department": "Fresh Meat & Poultry",
          "price": 3.3,
          "unitprice": 6.6
        },
         {
          "image": "http://img.tesco.com/Groceries/pi/488/5053526262488/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 74668370,
          "ContentsMeasureType": "G",
          "name": "Tesco Diced Beef 400G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.564,
          "description": ["Diced beef.", "From Trusted Northern Irish Farms. We work in partnership with trusted farmers to ensure high welfare standards from farm to fork, to deliver great quality beef."],
          "UnitQuantity": "KG",
          "id": 280710797,
          "ContentsQuantity": 400,
          "department": "Fresh Meat & Poultry",
          "price": 3.7,
          "unitprice": 9.25
        }, {
          "image": "http://img.tesco.com/Groceries/pi/325/5057008546325/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 81866107,
          "ContentsMeasureType": "G",
          "name": "Tesco British Chicken Breast Portions 650G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.746,
          "description": ["Fresh Class A skinless chicken breast fillet portions.", "Tesco Welfare Approved Fed on a wholegrain diet for a succulent texture"],
          "UnitQuantity": "KG",
          "id": 294007923,
          "ContentsQuantity": 650,
          "department": "Fresh Meat & Poultry",
          "price": 3.8,
          "unitprice": 5.85
        }, {
          "image": "http://img.tesco.com/Groceries/pi/168/5053526421168/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 62472135,
          "ContentsMeasureType": "G",
          "name": "Tesco Pork Shoulder Steaks 700G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.878,
          "description": ["Boneless pork shoulder steaks.", "From trusted farms. Working with selected farmers that we trust, to ensure high welfare standards and consistent quality."],
          "UnitQuantity": "KG",
          "id": 281085590,
          "ContentsQuantity": 700,
          "department": "Fresh Meat & Poultry",
          "price": 3.5,
          "unitprice": 5.0
        }, {
          "image": "http://img.tesco.com/Groceries/pi/261/5000358051261/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 53066181,
          "ContentsMeasureType": "G",
          "name": "Tesco Pork Lean Mince 5% Fat 500G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.597,
          "description": ["Lean pork mince 5% fat. Typical percentage of fat content under 5%. Typical percentage of Collagen/meat protein ratio under 12%", "From Trusted Northern Irish Farms. Working with selected farmers that we trust, to ensure high welfare standards and consistent quality."],
          "UnitQuantity": "KG",
          "id": 258431866,
          "ContentsQuantity": 500,
          "department": "Fresh Meat & Poultry",
          "price": 3.0,
          "unitprice": 6.0
        }, {
          "image": "http://img.tesco.com/Groceries/pi/669/5057753911669/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 86017420,
          "ContentsMeasureType": "G",
          "name": "Tesco British Chicken Breast Portions 525G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.608,
          "description": ["Fresh Class A skinless chicken breast fillet portions.", "TESCO WELFARE APPROVED   This product can contain a variable number of chicken breast fillets in each pack. Make light work of midweek meals with our naturally lean and tender chicken breasts. These hand trimmed, skinless fillets are perfect fried in fajitas, sliced in a stir fry or diced in curry. For a healthy teatime treat simply season, grill and serve with roasted vine tomatoes and fresh rocket salad. Click the Recipes tab at the top of this page to find our delicious chicken recipes. Expertly selected for freshness and quality. From trusted farms. Our chickens are reared by selected farmers in spacious barns with daylight and bales to encourage natural behaviours and ensure their wellbeing. Fed on a wholegrain diet for a succulent texture."],
          "UnitQuantity": "KG",
          "id": 304401631,
          "ContentsQuantity": 525,
          "department": "Fresh Meat & Poultry",
          "price": 4.0,
          "unitprice": 7.62
        }, {
          "image": "http://img.tesco.com/Groceries/pi/001/5057753931001/IDShot_90x90.jpg",
          "superDepartment": "Fresh Food",
          "tpnb": 85983745,
          "ContentsMeasureType": "G",
          "name": "Tesco British Chicken Breast Mini Fillets 400G",
          "UnitOfSale": 1,
          "AverageSellingUnitWeight": 0.498,
          "description": ["Fresh Class A skinless chicken breast mini fillets.", "For more information about our strict welfare and quality standards visit tescoplc.com"],
          "UnitQuantity": "KG",
          "id": 304368923,
          "ContentsQuantity": 400,
          "department": "Fresh Meat & Poultry",
          "price": 3.0,
          "unitprice": 7.5
        }]

    const handleDelete = () => console.log('Deleting')

    return(
        <Fragment>
            <CardContent>
               <Tooltip
                    placement="right"
                    title="Product list will be fully searchable. Hardcoded to a sample list for now"
                    arrow>
                    <Chip label="Meat" onDelete={handleDelete} />
               </Tooltip>
            </CardContent>
            <List>
                {products.map((i) => {
                    return(
                        <ProductListItem product={i} />
                    )
                })}
            </List>
        </Fragment>
    )
}