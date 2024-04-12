import "./product.css"
import Price from "./price"
//function Product(props){
    function Product({title,price,idx}){
    //console.log(props.title);neeche bhi yeh write 1st way
    //console.log(features2)
    //const list=features.map((feature)=><li>{feature}</li>)
//let styles={color:title}
let oldPrices=["12","23","34","45"];
let newPrices=["89","78","54","32"];
let description=["12","23","34","45"]
    return(
       /* <div className="Product" style={styles}>
            <h3 >hello</h3>
            <h5>price: {price}</h5>
            
        </div>*/
        <div className="Product" >
            <h3> {title} </h3>
            
            <h3>{description[idx]}</h3>
            <h5><Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/></h5>
            
        </div>

    );
    }
/*} else {return(
    <div className="Product">
        <h3>{title}</h3>
        <h5>price: {price}</h5>
    </div>
);

}

    }*/
    //other way
    /*let isDisc = price>30? <p>"5%"</p> :"";
    let styles={backgroundColor: price>30 ? "blue" : ""};
    return(
        <div className="Product" style={styles}>
            <h3 style={styles}>{title}</h3>
            <h5>price: {price}</h5>
            {isDisc}
        </div>
    );
    }*/
export default Product;
//by list not working 
//isDisc can be addeed directly also