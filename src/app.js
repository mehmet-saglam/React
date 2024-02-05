        const root = ReactDOM.createRoot(
            document.getElementById('root')
          );
        

        function clickMe() {
            renderApp();
            alert("Butona tiklandi");
        }

        // var value=null;
        // function clickMe() {                    comment lines for writing output to the screen without alert box.
        //     value =  "Butona tiklandi";
        //     renderApp();
        // }

        function renderApp() {
            var template2 = 
        (
        <div>
            <button onClick={clickMe}> Click me </button>
           // {value != "" ? <h1>{value}</h1> : ""}  
        </div>
        );
        root.render(template2);
        }

        renderApp();
