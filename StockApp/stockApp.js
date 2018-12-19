$(document).ready(()=>{
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm)

    $('.stock-form').submit((event)=>{
        // stop the broswer from sending the form to another pageXOffset
        event.preventDefault(); 
        console.log(event);

        // how can we make an array out of a string based on where the (,) are
        // console.log(symbols)
        
        // .val() is jquery. value is native js
        const symbol = $('#symbol').val();
        $('#symbol').val('');

        const symbols = symbol.split(',')
        // console.log(symbol)

        symbols.forEach((s)=>{
            s = s.trim();

            // out endpoint 
            // an endpoint is a web accesible url, that responds with data
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`

            $.getJSON(url,(theDataJSFoundIfAny)=>{
                // console.log(theDataJSFoundIfAny)
                let changeClass = " ";
                if(theDataJSFoundIfAny.change > 0){
                    changeClass = "text-success";
                }else{
                    changeClass = "text-danger"
                }

                $('#stock-body').prepend(`
                    <tr>
                        <td>${theDataJSFoundIfAny.symbol}</td>
                        <td>${theDataJSFoundIfAny.companyName}</td>
                        <td>${theDataJSFoundIfAny.high}</td>
                        <td>${theDataJSFoundIfAny.low}</td>
                        <td class=${changeClass}>${theDataJSFoundIfAny.change}</td>

                    </tr>
                `)
            })
        });  
        $('#stock-table').DataTable({
            searching: false
        }); 
    })
});