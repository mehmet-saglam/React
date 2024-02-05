        const root = ReactDOM.createRoot(
            document.getElementById('root')
          );
        

        function clickMe() {
            renderApp();
            alert("Butona tiklandi");
        }


        function renderApp() {
            var template2 = 
        (
        <div>
            <button onClick={clickMe}> Click me </button>
        </div>
        );
        root.render(template2);
        }

        renderApp();