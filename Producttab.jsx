import Product from "./product.jsx";
function Producttab(){
    let styles={
        display:"flex",
        flexWrap:"nowrap",
        justifyContent:"center",
        alignItems:"center"
    }
   //let options=["hi-tech","durable"];
    //let options2={a: "hitech",b: "durable",c: "fast"};
    let options=[<li>"hi-tech"</li>,<li>"durable"</li>];
    /*return (
        <>
        <Product title="yellow" price="phone" features={options} />
        <Product title="pink" price="mobile" />
        <Product title="orange" price="pen"/>
     </>
    );*/
    return (
        <div style={styles}>
        <Product  title="logitech" idx={0} />
        <Product  title="apple pencil" idx={1} />
        <Product  title="zebronics" idx={2}/>
        <Product  title="jdj" idx={3}/>
     </div>
    );
}
export default Producttab;